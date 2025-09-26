import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtpdm-eu-central-1.aliyuncs.com', // Mailgun SMTP host
  port: 465,                   // SSL/TLS port
  secure: true,                // Use TLS
  auth: {
    user: 'portal@mx4.gtcmail.com', // Mailgun SMTP username
    pass: 'Ab3Cde4FgH', // Mailgun SMTP password
  },
});

export const mailOptions = {
  from: 'portal@mx4.gtcmail.com',
  to: 'support@gtcfxiq.com',
  bcc: 'mohammad.zeeshan@gtcfx.com',
};

export const mailOptionsJobs = {
  from: 'portal@mx4.gtcmail.com',
  to: 'careers@gtcfx.com',
  bcc: 'zeeshan@gtcfx.com',
};

export const mailOptionsSupports = {
  from: 'portal@mx4.gtcmail.com',
  to: 'support@gtcfx.com',
  bcc: 'zeeshan@gtcfx.com',
};
 