import { NextResponse } from "next/server";
import { transporter } from "../../../config/nodemailer";

export async function POST(req) {
    const { email, name } = await req.json();
    const mailData = {
        from: '"GTCFX" <portal@mx2.gtcmail.com>',
        to: email,
        subject: "Your LP Trading Account is Now Active",
        html: `
        <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Live Trading Account is Now Active</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #F7F7F7; font-family: 'Outfit', Arial, sans-serif; color: #1e2158; text-align: left; line-height: 22px;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="border-spacing: 0; width: 100%;">
        <tr>
            <td align="center" bgcolor="#F7F7F7">
                <div class="container" style="max-width: 700px; margin: 0 auto; background-color: #192055; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-radius: 36px; padding: 20px; background-color: #fff; width: 100%;">
                        <tr>
                            <td class="header" style="padding: 20px; text-align: center;">
                                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Global Capital Trade Logo" style="max-width: 165px; height: auto;">
                            </td>
                        </tr>
                        <tr>
                            <td class="content">
                                <h1 style="color: #192055; text-align: center; font-size: 18px; margin: 0px auto 0px;">Your Test LP Trading <br>Account is Now Active</h1>
                                <h3 style="font-size: 16px; color: #192055;">Dear ${name},</h3>
                        
                                <p>We are pleased to inform you that your live trading account has been successfully activated.</p>
                                <p>Below are your account credentials. Once logged in, you can access the trading software and begin trading.</p>
                                <p>If you have any questions or need further assistance, please do not hesitate to contact us at <a href="mailto:support@gtcfxiq.com">support@gtcfxiq.com</a>. We are here to support you and ensure your experience with us is exceptional.</p>
                        
                                <table class="content-table" style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Account Currency</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">USD</td>
                                    </tr>
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Trading Account</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">3618</td>
                                    </tr>
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Main Password</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Qx*zB4Pg</td>
                                    </tr>
                            
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Trading Platform</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">MT5</td>
                                    </tr>
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Server Name</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">GTCGlobalTrade-Server</td>
                                    </tr>
                                </table>
                        
                                <p>Your login account and password must be kept confidential at all times. Passwords should never be shared or exposed to others. You will not let anyone else access your account, or do anything else that might jeopardize the security of your account. You are responsible for the confidentiality and use of all IDs, passwords, and other security data, methods, and devices furnished in connection with the client portal and trading platform.</p>
                                <p>Thank you for choosing us.</p>
                        
                                <p style="line-height: 30px; padding-top: 20px;">Sincerely,<br><strong style="color: #192055; margin-top: 5px;">GTCFX Team</strong></p>
                            </td>
                        </tr>
                        <tr>
                          <td class="footer" style="padding: 20px 0px; font-size: 10px; color: #000; background-color: #f7f7f736; border-radius: 0 0 36px 36px; text-align: left;">
                                <div class="social-icons" style="padding-bottom: 10px; text-align: center;">
                                    <a href="https://www.facebook.com/gtcfxofficial" style="text-decoration: none;" target="_blank">
                                        <img alt="Facebook" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/facebook_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://twitter.com/GTC_fx" style="text-decoration: none;" target="_blank">
                                        <img alt="Twitter" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/twitter_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://linkedin.com/company/gtcfx-official" style="text-decoration: none;" target="_blank">
                                        <img alt="LinkedIn" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/linkedin_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" style="text-decoration: none;" target="_blank">
                                        <img alt="YouTube" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/youtube_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://www.instagram.com/gtcfxofficial" style="text-decoration: none;" target="_blank">
                                        <img alt="Instagram" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/instagram_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://www.tiktok.com/@gtcgroup_official" style="text-decoration: none;" target="_blank">
                                        <img alt="TikTok" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/tiktok_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                </div>
                                <p>
                                    Company name: GTC FX / Website: www.gtcfx.com / Email:
                                    support@gtcfxiq.com
                                  </p>
                                  <p>
                                    Disclaimers: The information in this email is for general
                                    purposes only and does not constitute personal financial
                                    advice. Please assess the relevance of this information to
                                    your financial goals and situation before making any
                                    financial decisions.
                                  </p>
                                  <p>
                                    Note: Our products and services are not available in
                                    restricted countries.
                                  </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>`,
    };
    try {
        await transporter.sendMail(mailData);
        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Error Sending Email" },
            { status: 500 }
        );
    }
}
