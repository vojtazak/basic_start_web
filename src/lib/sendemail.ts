import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailParams = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  const { error } = await resend.emails.send({
    from: 'Contact Form <contact@resend.dev>', // Sandbox sender
    to,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
