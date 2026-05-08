import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { nombre, email, empresa, proyecto } = await req.json();

  const { error } = await resend.emails.send({
    from: 'Cotizaciones <onboarding@resend.dev>',
    to: ['basthian.alejandro27@gmail.com'],
    subject: `Nueva cotización de ${nombre}`,
    html: `
      <h2>Nueva solicitud de cotización</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
      <p><strong>Proyecto:</strong> ${proyecto}</p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

export const config = { path: '/api/cotizacion' };
