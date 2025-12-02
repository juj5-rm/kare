import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    console.log("Datos recibidos:", req.body);

    // Desestructuración de los datos del cuerpo de la solicitud
    const { name, email, message } = req.body;

    // Validación de los campos
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    // Envío del correo con Resend
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contactosigca@gmail.com',
      subject: `Nuevo mensaje de soporte de ${name} - ${email} - ${formattedDate}`,
      html: message,
    });

    console.log("Correo enviado exitosamente:", response);

    return res.status(200).json({ success: true, data: response });
  } catch (error: unknown) {
    // Mejor manejo de errores
    if (error instanceof Error) {
      console.error('Error al enviar el correo:', error.message);
      return res.status(500).json({ error: error.message });
    }

    console.error('Error desconocido al enviar el correo');
    return res.status(500).json({ error: 'Error desconocido al enviar el correo' });
  }
}
