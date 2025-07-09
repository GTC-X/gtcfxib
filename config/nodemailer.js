import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.eu.mailgun.org', // Mailgun SMTP host
  port: 465,                   // SSL/TLS port
  secure: true,                // Use TLS
  auth: {
    user: 'portal@mx1.gtcmail.com', // Mailgun SMTP username
    pass: '48490f5c91f63ae6e470633d79aa10fb-7c5e3295-a24fb77e', // Mailgun SMTP password
  },
});

export const mailOptions = {
  from: 'portal@mx1.gtcmail.com',
  to: 'support@gtcfxiq.com, support@gtcup.com, marginbonus@gtcfx.com',
  bcc: 'mohammad.zeeshan@gtcfx.com',
};

export const mailOptionsJobs = {
  from: 'portal@mx1.gtcmail.com',
  to: 'careers@gtcfx.com',
  bcc: 'zeeshan@gtcfx.com',
};
