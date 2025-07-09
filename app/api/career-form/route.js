import { NextResponse } from "next/server";
import { transporter, mailOptionsJobs } from "../../../config/nodemailer";

const generateEmailContent = (data) => {
    return {
        html: `
  <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Leads From - Celebrate Independence 100% Bonus!</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #F7F7F7; font-family: 'Outfit', Arial, sans-serif; color: #1e2158; text-align: left; line-height: 22px;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="border-spacing: 0; width: 100%;">
        <tr>
            <td align="center" bgcolor="#F7F7F7">
                <div class="container" style="max-width: 650px; margin: 0 auto; background-color: #192055; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-radius: 36px; padding: 20px; background-color: #fff; width: 100%;">
                        <tr>
                            <td class="header" style="padding: 20px; text-align: center;">
                                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Global Capital Trade Logo" style="max-width: 165px; height: auto;">
                            </td>
                        </tr> 
                        <tr>
                            <td class="content">
                                <h1 style="color: #192055; text-align:center; font-size: 18px; max-width: 80%; margin: 0px auto;">
                                  Career - New Job Application Submitted
                                </h1>
                                <h3 style="font-size: 16px; color: #192055;">
                                    Dear <em>Team</em>,
                                </h3>
                                <p>A new job application has been submitted by ${data?.first_name} ${data?.last_name}</p>
                                               <h2 style="color: #192055; font-size: 16px;">Detail Information</h2>
                                <table class="content-table" style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">First Name</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">${data?.first_name}</td>
                                    </tr>
                                    <tr>
                                      <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Last Name</th>
                                      <td style="padding: 10px; border: 1px solid #ddd;">${data?.last_name}</td>
                                  </tr>
                                  <tr>
                                    <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Email</th>
                                    <td style="padding: 10px; border: 1px solid #ddd;">${data?.email}</td>
                                </tr>
                                           <tr>
                                    <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Phone Number</th>
                                    <td style="padding: 10px; border: 1px solid #ddd;">${data?.phone}</td>
                                </tr>
                                  <tr>
                                    <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Linkedin Profile</th>
                                    <td style="padding: 10px; border: 1px solid #ddd;">${data?.url}</td>
                                </tr>
                                <tr>
                                  <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Experience</th>
                                  <td style="padding: 10px; border: 1px solid #ddd;">${data?.experience}</td>
                              </tr>
  <tr>
                                  <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">City</th>
                                  <td style="padding: 10px; border: 1px solid #ddd;">${data?.city}</td>
                              </tr>
                              <tr>
                                <th colspan="2" style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Message</th>
                            
                            </tr>
                            <tr>
                                                      <td colspan="2" style="padding: 10px; border: 1px solid #ddd;">${data?.message}</td>
                          </tr>
                                   
                                    
                                </table>

                               
                                <p style="line-height: 30px; padding-top: 20px;">Best Regards,<br><strong style="color: #192055; margin-top: 5px;">GTCFX Team</strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="footer" style="padding: 20px 0px; font-size: 10px; color: #000; background-color: #f7f7f736; border-radius: 0 0 36px 36px; text-align: center;">
                                <div class="social-icons" style="padding-bottom: 10px;">
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
                                <p style="font-size: 9px; line-height: 13px; text-align: left;">
                                    Company name: GTCFX / Website: www.gtcfx.com/ Email: support@gtcfx.com 
                                </p>
                                <p style="font-size: 9px; line-height: 13px; text-align: left;">
                                    Disclaimers: The information in this email is for general purposes only and does not constitute personal financial advice. Please assess the relevance of this information to your own financial goals and situation. Investing in contract for difference products carries significant risks and may not be suitable for all investors. Losses may exceed the initial deposit. You do not have ownership rights to the underlying assets of the contract. We advise seeking professional guidance to fully understand the risks before trading. Please review our user terms, risk warnings, privacy policy, and other relevant documents before making financial decisions.
                                </p>
                                <p style="font-size: 9px; line-height: 13px; text-align: left;">
                                    Note that our products and services are not available in restricted countries.
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>
    `,
    };
};

export async function POST(req) {
    try {
        const reqBody = await req.json(); // Parse the request body
        const { fileName, resume } = reqBody; // Extract the file name and base64 content from the request body
        // Prepare the email content
        await transporter.sendMail({
            ...mailOptionsJobs,
            ...generateEmailContent(reqBody), // Assume you're still generating the email content with reqBody
            subject: "A new job application has been submitted",
            attachments: [
                {
                    filename: fileName || "attachment.pdf", // Filename for the attachment
                    content: resume, // Base64 encoded file content
                    encoding: "base64", // Specify that the content is base64 encoded
                },
            ],
        });

        return NextResponse.json(
            { message: "Success", data: reqBody },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
