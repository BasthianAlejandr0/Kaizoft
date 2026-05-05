export const prerender = false;//? esto le dice a Astro "esta ruta es server-side

import type {APIRoute} from 'astro';


import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { nombre, email, empresa, proyecto } = data;

  const { error } = await resend.emails.send({
    from: 'Cotizaciones <onboarding@resend.dev>',
    to: ['basthian.alejandro27@gmail.com'], // 👈 cambia esto por tu correo real
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
