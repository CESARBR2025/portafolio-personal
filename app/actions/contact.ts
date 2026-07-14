"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContact(_prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Todos los campos son obligatorios." };
  }

  try {
    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: "barcenasrosalescesarivan@gmail.com",
      subject: `Nuevo contacto de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
            <tr>
              <td align="center">
                <table width="540" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                  <tr>
                    <td style="background:#4f46e5;padding:28px 32px;">
                      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">Nuevo mensaje de contacto</h1>
                      <p style="margin:4px 0 0;color:#c7d2fe;font-size:14px;">Recibido desde tu portafolio</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom:20px;">
                            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:4px;">Remitente</div>
                            <div style="font-size:16px;font-weight:600;color:#1e293b;">${name}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:24px;">
                            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:4px;">Correo</div>
                            <a href="mailto:${email}" style="font-size:15px;color:#4f46e5;text-decoration:none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:20px;">
                            <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:8px;">Mensaje</div>
                            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;font-size:14px;line-height:1.6;color:#334155;white-space:pre-wrap;">${message}</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="background:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0;">
                      <p style="margin:0;font-size:12px;color:#94a3b8;">Puedes responder directamente a este correo para contactar al remitente.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      replyTo: email,
    });

    return { success: true };
  } catch {
    return { error: "Error al enviar el mensaje. Intenta de nuevo." };
  }
}
