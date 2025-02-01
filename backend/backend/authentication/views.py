from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from authentication.models import User, UserToken
from authentication.serializers import UserSerializer
from mail.views import validate_otp
from rest_framework.exceptions import ValidationError
from authentication.models import USER_ROLES

# Create View here
class ValidateView(APIView):
    def post(self, request, *args, **kwargs):
        # Parse the incoming request data
        serializer = UserSerializer(data=request.data)

        # Check if the data is valid
        if serializer.is_valid():
            email = serializer.validated_data['email']
            otp = serializer.validated_data['otp']
            role_id = serializer.validated_data['role_id']

            try:
                validate_otp(email, otp)  # Validate OTP
                if role_id in USER_ROLES.keys():
                    # Get or create user based on email and role
                    user, created = User.objects.get_or_create(
                        email=email,
                        role=USER_ROLES[role_id]
                    )
                    # Create or retrieve user token
                    token, _ = UserToken.objects.get_or_create(user=user)

                    return Response({
                        'idToken': token.key,
                    }, status=status.HTTP_200_OK)

                else:
                    return Response({'error': 'Invalid role_id'}, status=status.HTTP_400_BAD_REQUEST)

            except ValidationError as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        else:
            # Return validation errors properly
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
