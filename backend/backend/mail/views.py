from rest_framework import status, views
from rest_framework.response import Response
from .models import OTP
from .serializers import OTPSerializer
import smtplib, random
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from rest_framework.exceptions import ValidationError
from mail.credentials import smtp_port,smtp_server,username,password,sender_email
from server_stat.views import increment_mail_counter


def generate_new_otp(length=6):
    """Generate a new OTP with a specified length."""
    digits = '0123456789'
    otp = ''.join(random.choice(digits) for _ in range(length))
    return otp

def sendmail(receiver_email, body):
    try:
        # Create the email message
        message = MIMEMultipart()
        message['From'] = sender_email
        message['To'] = receiver_email
        message['Subject'] = 'Your OTP Code'
        message.attach(MIMEText(body, 'plain'))
        
        # Connect to the server and send email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()  # Upgrade the connection to a secure encrypted SSL/TLS connection
            server.login(username, password)
            response = server.sendmail(sender_email, receiver_email, message.as_string())
            increment_mail_counter()
            

        # If sendmail() returns an empty dictionary, the email was sent successfully
        return True if not response else False
            
    except Exception as e:
        print(f"Error sending email: {e}")
        return False
    

def validate_otp(email, otp):
    try:
        otp_instance = OTP.objects.get(email=email, otp=otp)
        # Delete OTP after successful validation
        OTP.objects.filter(email=email, otp=otp).delete()
       
    except OTP.DoesNotExist:
        raise ValidationError('Invalid OTP')


class CreateOTPView(views.APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        email = email.lower()  # Ensure email is lowercase
        # Mark any existing OTP as deleted (optional, if using is_deleted)
        OTP.objects.filter(email=email).delete()  # You can use this to delete any existing OTPs

        # Generate and save new OTP
        otp = generate_new_otp()
        otp_instance = OTP.objects.create(email=email, otp=otp)
        
        # Send OTP email
        email_body = f'Your OTP code is {otp}. It is valid for 10 minutes.'
        if sendmail(receiver_email=email, body=email_body):
            return Response({'message': 'OTP sent successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'OTP not sent'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
