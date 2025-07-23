import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/lib/sendemail';

type ContactRequestBody = {
  name: string;
  email: string;
  message: string;
};

type ResponseData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body as ContactRequestBody;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await sendEmail({
      to: 'developer@resend.dev', // still sandbox, switch to real later
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ message: '✅ Message sent (sandbox)' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Contact Form Error]', error);
    return res.status(500).json({ message: '❌ Failed to send message', error: errorMessage });
  }
}


/*test code resend works*/
/*import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/lib/sendemail';

type ResponseData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    // Smoke test values
    await sendEmail({
      to: 'developer@resend.dev', // Doesn't have to be real in sandbox
      subject: 'Resend Smoke Test',
      html: '<p>This is a sandbox test email from Resend.</p>',
    });

    return res.status(200).json({ message: '✅ Resend test email sent (sandbox)' });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('[Resend Smoke Test Error]', error);
    return res
      .status(500)
      .json({ message: '❌ Resend test failed', error: errorMessage });
  }
}*/

