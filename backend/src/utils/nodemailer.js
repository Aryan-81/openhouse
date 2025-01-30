import nodemailer from "nodemailer"
import { google } from "googleapis"
import { ApiError } from "./apiError.js";


const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI;
const refreshToken = process.env.REFRESH_TOKEN;
const sendersAddress = process.env.SENDERS_ADDRESS;


class EmailService {
    constructor() {
        this.oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectURI);
        this.oauth2Client.setCredentials({ refresh_token: refreshToken });
    };

    async createTransporter() {
        try {
            const accessToken = await this.oauth2Client.getAccessToken();

            return nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: sendersAddress,
                    clientId,
                    clientSecret,
                    refreshToken,
                    accessToken: accessToken.token
                }
            });
        } catch (error) {
            throw new ApiError(500, 'Error while creating email transporter');
        }
    };

    async sendEmail(to, subject, htmlContent) {
        try {
            const transporter = await this.createTransporter();

            const mailOptions = {
                from: `"PRAGYAAN" <${sendersAddress}>`,
                to,
                subject,
                html: this.wrapInBaseTemplate(htmlContent)
            }

            const result = await transporter.sendMail(mailOptions);

            console.log("Email sent successfully!! Message ID:", result.messageId);
        } catch (error) {
            throw new ApiError(500, 'Error while sending email');
        }
    };

    wrapInBaseTemplate(content) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                ${content}

                <br>
                <br>
                <p>Best Regards</p>
                <p>IIT Jammu</p>
            </body>
            </html>
        `;
    };

    async sendOTPEmail(userEmail, OTP) {
        const subject = 'OTP for registration for Pragyaan - IIT Jammu'

        const content = `
        <p>Your OTP for login is <strong>${OTP}</strong></p>
        <p>It is valid for 5 minutes</p>
        <p>If you didn't request this, please ignore this email.</p>
        `;

        return this.sendEmail(userEmail, subject, content);
    }

    // Add more templates for emails as required
}


const emailService = new EmailService();
export { emailService }