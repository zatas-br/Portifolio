import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

const emailDestinos = [
  'contato@zatas.com.br',
  'santiago@zatas.com.br',
  'brito@zatas.com.br',
  'torres@zatas.com.br',
  'bryan@zatas.com.br'
];

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

function getEmailHtml(name: string, email: string, message: string): string {
  const mensagemFormatada = message.replace(/\n/g, '<br>');
  const azulEscuro = '#0d1b2a';
  const branco = '#FFFFFF';
  const cinzaClaroBg = '#f4f7f6';
  const cinzaTexto = '#333333';
  const cinzaBorda = '#dddddd';

  return `
  <body style="margin: 0; padding: 0; background-color: ${cinzaClaroBg}; font-family: Arial, sans-serif;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color: ${azulEscuro}; color: ${branco}; padding: 25px 30px; font-size: 24px; font-weight: bold;">
          Novo Contato do Portfólio
        </td>
      </tr>
      <tr>
        <td style="background-color: ${branco}; padding: 30px; color: ${cinzaTexto}; font-size: 16px; line-height: 1.6;">
          <p style="margin: 0 0 20px 0;">Você recebeu uma nova mensagem de <strong>${name}</strong>.</p>
          <hr style="border: 0; border-top: 1px solid ${cinzaBorda}; margin: 20px 0;">
          <p style="margin: 0 0 10px 0;"><strong>De:</strong> ${name}</p>
          <p style="margin: 0 0 20px 0;"><strong>Email (Reply-To):</strong> ${email}</p>
          <p style="margin: 0 0 10px 0;"><strong>Mensagem:</strong></p>
          <div style="background-color: ${cinzaClaroBg}; border: 1px solid ${cinzaBorda}; padding: 15px; border-radius: 5px; font-style: italic;">
            ${mensagemFormatada}
          </div>
        </td>
      </tr>
    </table>
  </body>
  `;
}

export async function POST(req: NextRequest) {
  if (!fromEmail || !process.env.RESEND_API_KEY) {
    console.error('Variáveis de ambiente (RESEND_API_KEY ou FROM_EMAIL) não configuradas.');
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }

  try {
    const { name, email, message }: RequestBody = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: `Contato Portfólio <${fromEmail}>`,
      to: emailDestinos,
      subject: `Novo Contato (Portfólio) de: ${name}`,
      replyTo: email,
      html: getEmailHtml(name, email, message),
    });

    if (error) {
      console.error('Erro do Resend:', error);
      return NextResponse.json({ error: 'Erro ao enviar o e-mail' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'E-mail enviado!' }, { status: 200 });

  } catch (error) {
    console.error('Exceção capturada:', error);
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Requisição JSON mal formatada' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Erro interno ao processar a requisição' }, { status: 500 });
  }
}