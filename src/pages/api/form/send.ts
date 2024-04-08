import type { APIRoute } from 'astro';
import { SMTPClient } from 'emailjs';

export const POST: APIRoute = async ({ request }) => {
  const client = new SMTPClient({
    user: import.meta.env.EMAILJS_CLIENT_USER,
    password: import.meta.env.EMAILJS_CLIENT_PASSWORD,
    host: import.meta.env.EMAILJS_CLIENT_HOST,
    tls: {
      ciphers: 'SSLv3',
    },
  });

  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  const messageBody: string = `
 name: ${name}\n
 email: ${email}\n
  
 ${message}
 `;

  try {
    await client.sendAsync({
      from: import.meta.env.EMAILJS_SEND_FROM,
      to: import.meta.env.EMAILJS_SEND_TO,
      subject: 'hammadmajid.me | New form submission',
      text: `${messageBody}`,
    });

    return new Response(
      JSON.stringify({
        message: "Form submitted successfully!",
        status: 200,
      }),
      { status: 200 },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        // @ts-ignore
        message: err.message,
        // @ts-ignore
        status: err.code,
      }),
      { status: 500 },
    );
  }
};
