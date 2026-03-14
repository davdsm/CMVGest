type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export function buildAdminEmailHtml(data: ContactPayload) {
  const { name, email, phone, subject, message } = data;

  return `<!doctype html>
<html lang="pt-PT">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Novo pedido de contacto · CMVGest</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #0f0b11;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #f7f5f9;
      }
      .wrapper {
        width: 100%;
        background-color: #0f0b11;
        padding: 32px 16px;
        box-sizing: border-box;
      }
      .card {
        max-width: 640px;
        margin: 0 auto;
        background: radial-gradient(circle at top left, #3a2735 0, #1b121f 48%, #0f0b11 100%);
        border-radius: 24px;
        padding: 28px 24px 24px;
        box-sizing: border-box;
        border: 1px solid rgba(255,255,255,0.08);
      }
      .tag {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.16);
        font-size: 11px;
        letter-spacing: .18em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.7);
      }
      h1 {
        margin: 16px 0 4px;
        font-size: 24px;
        line-height: 1.25;
      }
      p {
        margin: 8px 0;
        font-size: 14px;
        line-height: 1.6;
        color: rgba(244,240,246,0.8);
      }
      .meta {
        margin-top: 20px;
        padding: 14px 14px 10px;
        border-radius: 18px;
        background-color: rgba(8,7,11,0.8);
        border: 1px solid rgba(255,255,255,0.06);
      }
      .meta-row {
        display: flex;
        margin-bottom: 6px;
        font-size: 13px;
      }
      .meta-label {
        width: 90px;
        color: rgba(249,245,255,0.55);
      }
      .meta-value {
        color: #f7f5f9;
      }
      .message-box {
        margin-top: 18px;
        padding: 16px 14px;
        border-radius: 18px;
        background-color: rgba(250,248,255,0.02);
        border: 1px solid rgba(255,255,255,0.08);
        font-size: 14px;
        line-height: 1.7;
        white-space: pre-wrap;
      }
      .footer {
        margin-top: 20px;
        font-size: 11px;
        color: rgba(214,210,220,0.5);
      }
      a {
        color: #f5c1dd;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      @media (min-width: 600px) {
        .card { padding: 32px 32px 26px; }
        h1 { font-size: 26px; }
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="card">
        <span class="tag">Novo Pedido de Contacto</span>
        <h1>Há alguém interessado no conceito chave na mão.</h1>
        <p>
          Recebeu um novo pedido de contacto através do site da
          <strong>CMVGest</strong>. Seguem em baixo os detalhes do lead.
        </p>

        <div class="meta">
          <div class="meta-row">
            <div class="meta-label">Nome</div>
            <div class="meta-value">${name}</div>
          </div>
          <div class="meta-row">
            <div class="meta-label">Email</div>
            <div class="meta-value"><a href="mailto:${email}">${email}</a></div>
          </div>
          ${phone ? `<div class="meta-row">
            <div class="meta-label">Telefone</div>
            <div class="meta-value"><a href="tel:${phone}">${phone}</a></div>
          </div>` : ""}
          ${subject ? `<div class="meta-row">
            <div class="meta-label">Assunto</div>
            <div class="meta-value">${subject}</div>
          </div>` : ""}
        </div>

        ${
          message
            ? `<div class="message-box">
          ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
        </div>`
            : ""
        }

        <div class="footer">
          Esta mensagem foi gerada automaticamente a partir do formulário de contacto do site.
          Responda diretamente ao email do cliente para dar seguimento.
        </div>
      </div>
    </div>
  </body>
</html>`;
}

export function buildClientEmailHtml(data: ContactPayload) {
  const { name } = data;

  return `<!doctype html>
<html lang="pt-PT">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Obrigado pelo seu contacto · CMVGest</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #0f0b11;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #f7f5f9;
      }
      .wrapper {
        width: 100%;
        padding: 32px 16px;
        box-sizing: border-box;
      }
      .card {
        max-width: 640px;
        margin: 0 auto;
        border-radius: 24px;
        padding: 30px 24px 26px;
        box-sizing: border-box;
        border: 1px solid rgba(255,255,255,0.08);
        background: radial-gradient(circle at top left, #3a2735 0, #211625 36%, #0f0b11 100%);
      }
      .pill {
        display: inline-block;
        padding: 4px 14px;
        border-radius: 999px;
        font-size: 11px;
        letter-spacing: .18em;
        text-transform: uppercase;
        border: 1px solid rgba(255,255,255,0.16);
        color: rgba(255,255,255,0.76);
      }
      h1 {
        margin: 18px 0 8px;
        font-size: 24px;
        line-height: 1.35;
      }
      p {
        margin: 8px 0;
        font-size: 14px;
        line-height: 1.7;
        color: rgba(244,240,246,0.9);
      }
      .divider {
        margin: 22px 0 18px;
        height: 1px;
        background: linear-gradient(to right, rgba(255,255,255,0.18), rgba(255,255,255,0));
      }
      .meta {
        font-size: 13px;
        color: rgba(230,225,235,0.7);
      }
      .meta strong {
        color: #ffffff;
      }
      .footer {
        margin-top: 22px;
        font-size: 11px;
        color: rgba(214,210,220,0.55);
      }
      @media (min-width: 600px) {
        .card { padding: 34px 32px 28px; }
        h1 { font-size: 26px; }
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="card">
        <span class="pill">CMVGest · Chave na Mão</span>
        <h1>Obrigado pelo seu contacto${name ? `, ${name}` : ""}.</h1>
        <p>
          Recebemos a sua mensagem e a nossa equipa está a analisá-la.
          Iremos entrar em contacto consigo com a máxima brevidade possível para
          falar sobre o seu projeto e esclarecer todas as questões.
        </p>
        <p>
          Se entretanto precisar de atualizar algum dado ou tiver alguma informação
          adicional, basta responder diretamente a este email.
        </p>

        <div class="divider"></div>

        <p class="meta">
          <strong>CMVGest</strong><br />
          Projetos chave na mão em Vermil.
        </p>

        <p class="footer">
          Esta é uma mensagem automática de confirmação de receção.
          Irá receber um novo contacto da nossa parte em breve.
        </p>
      </div>
    </div>
  </body>
</html>`;
}

