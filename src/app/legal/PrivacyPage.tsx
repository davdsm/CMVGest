import React from "react";

export function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f0b11] text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-40 md:px-10 md:py-40">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            CMVGest
          </p>
          <h1 className="font-title text-3xl md:text-4xl font-semibold tracking-[-0.04em]">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="text-xs text-white/50">
            Última atualização: {new Date().toLocaleDateString("pt-PT")}
          </p>
        </header>

        <section className="space-y-5 text-sm leading-relaxed text-white/80">
          <p>
            A presente Política de Privacidade explica como a{" "}
            <strong>CMVGest</strong> trata os dados pessoais dos utilizadores do
            Website, em conformidade com o Regulamento (UE) 2016/679 do
            Parlamento Europeu e do Conselho, de 27 de abril de 2016
            (&quot;RGPD&quot;), e com a legislação portuguesa aplicável em
            matéria de proteção de dados.
          </p>

          <h2 className="font-semibold text-base text-white">
            1. Responsável pelo tratamento
          </h2>
          <p>
            O responsável pelo tratamento dos dados pessoais é a{" "}
            <strong>CMVGest</strong>. Para quaisquer questões relacionadas com a
            proteção de dados pessoais, poderá contactar-nos através do email{" "}
            <a
              href="mailto:geral@cmvgest.com"
              className="underline decoration-white/40 underline-offset-4"
            >
              geral@cmvgest.com
            </a>{" "}
            ou do número (+351) 964 140 860.
          </p>

          <h2 className="font-semibold text-base text-white">
            2. Que dados pessoais recolhemos e como
          </h2>
          <p>Poderemos recolher e tratar as seguintes categorias de dados:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Dados de identificação e contacto</strong> – nome, email,
              número de telefone, quando o utilizador preenche o formulário de
              contacto ou nos envia um email.
            </li>
            <li>
              <strong>Dados de utilização do Website</strong> – informações
              técnicas e de utilização, como endereço IP truncado, tipo de
              dispositivo, navegador, páginas visitadas, datas e horas de
              acesso, recolhidos através de cookies ou tecnologias semelhantes,
              quando utilizados.
            </li>
          </ul>

          <h2 className="font-semibold text-base text-white">
            3. Finalidades e bases legais do tratamento
          </h2>
          <p>
            Os dados pessoais recolhidos são tratados para as seguintes
            finalidades e com as seguintes bases legais:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Gestão de pedidos de contacto</strong> – responder a
              questões, pedidos de informação ou contactos comerciais enviados
              através do formulário ou por email. Base legal:{" "}
              <em>interesse legítimo</em> da CMVGest em responder a solicitações
              e/ou diligências pré-contratuais a pedido do titular (art. 6.º,
              n.º 1, al. f) e b) do RGPD).
            </li>
            <li>
              <strong>Melhoria do Website e análise estatística</strong> – caso
              sejam utilizados cookies analíticos, para compreender a utilização
              do Website e melhorar conteúdos e funcionalidades. Base legal:{" "}
              <em>consentimento</em> do utilizador, quando exigido (art. 6.º,
              n.º 1, al. a) do RGPD).
            </li>
            <li>
              <strong>Cumprimento de obrigações legais</strong> – cumprimento de
              obrigações legais a que a CMVGest esteja sujeita (por exemplo em
              matéria fiscal ou de proteção de dados). Base legal:{" "}
              <em>cumprimento de obrigação legal</em> (art. 6.º, n.º 1, al. c)
              do RGPD).
            </li>
          </ul>

          <h2 className="font-semibold text-base text-white">
            4. Prazo de conservação
          </h2>
          <p>
            Os dados pessoais serão conservados apenas pelo período necessário
            para as finalidades para que foram recolhidos, nomeadamente:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Dados de contacto obtidos através do formulário ou email: durante
              o tempo necessário para gerir o pedido e, se for caso disso, até
              ao decurso dos prazos de prescrição ou caducidade de direitos
              associados;
            </li>
            <li>
              Dados de utilização do Website recolhidos via cookies: de acordo
              com os prazos indicados na configuração das ferramentas utilizadas
              ou até retirada do consentimento, quando aplicável.
            </li>
          </ul>

          <h2 className="font-semibold text-base text-white">
            5. Destinatários dos dados
          </h2>
          <p>
            Os dados pessoais poderão ser comunicados a prestadores de serviços
            que atuem em nome e por conta da CMVGest (por exemplo, fornecedores
            de alojamento de dados, serviços de email ou manutenção de sistemas
            informáticos), sujeitos a obrigações contratuais de confidencialidade
            e proteção de dados.
          </p>
          <p>
            Não vendemos nem cedemos dados pessoais a terceiros para fins de
            marketing independente.
          </p>

          <h2 className="font-semibold text-base text-white">
            6. Transferências internacionais de dados
          </h2>
          <p>
            Se, para a prestação de determinados serviços, for necessário
            transferir dados pessoais para países fora do Espaço Económico
            Europeu, a CMVGest assegurará que essas transferências cumprem o
            RGPD, nomeadamente através da existência de decisões de adequação da
            Comissão Europeia ou da celebração de cláusulas contratuais‑tipo
            aprovadas pela Comissão.
          </p>

          <h2 className="font-semibold text-base text-white">
            7. Direitos dos titulares dos dados
          </h2>
          <p>
            Nos termos do RGPD, o titular dos dados tem, em determinadas
            condições, os seguintes direitos:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              direito de <strong>acesso</strong> aos seus dados pessoais;
            </li>
            <li>
              direito de <strong>retificação</strong> de dados inexatos ou
              incompletos;
            </li>
            <li>
              direito de <strong>apagamento</strong> (&quot;direito a ser
              esquecido&quot;), quando legalmente aplicável;
            </li>
            <li>
              direito de <strong>limitação</strong> do tratamento;
            </li>
            <li>
              direito de <strong>portabilidade</strong> dos dados, em formato
              estruturado, de uso corrente e de leitura automática;
            </li>
            <li>
              direito de <strong>oposição</strong> ao tratamento com base em
              interesses legítimos;
            </li>
            <li>
              direito de <strong>retirar o consentimento</strong>, quando o
              tratamento se basear no consentimento, sem comprometer a
              licitude do tratamento efetuado até essa data.
            </li>
          </ul>
          <p>
            Para exercer os seus direitos, o titular poderá contactar-nos por
            email para{" "}
            <a
              href="mailto:geral@cmvgest.com"
              className="underline decoration-white/40 underline-offset-4"
            >
              geral@cmvgest.com
            </a>
            . Poderemos solicitar prova de identidade quando necessário.
          </p>

          <h2 className="font-semibold text-base text-white">
            8. Direito a apresentar reclamação
          </h2>
          <p>
            O titular dos dados tem ainda o direito de apresentar reclamação
            junto da autoridade de controlo competente, em particular junto da{" "}
            <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong>, sem
            prejuízo de poder recorrer a outras vias administrativas ou
            judiciais.
          </p>

          <h2 className="font-semibold text-base text-white">
            9. Segurança da informação
          </h2>
          <p>
            A CMVGest adota medidas técnicas e organizativas adequadas para
            proteger os dados pessoais contra destruição, perda, alteração,
            divulgação ou acesso não autorizado, acidental ou ilícito, atendendo
            ao estado da técnica, aos custos de aplicação e à natureza, âmbito,
            contexto e finalidades do tratamento.
          </p>
          <p>
            No entanto, nenhum sistema é totalmente seguro, pelo que a CMVGest
            não pode garantir segurança absoluta das informações transmitidas
            através da Internet, recomendando a adoção de medidas adicionais
            pelo utilizador (como utilização de equipamento e software
            atualizados e protegidos).
          </p>

          <h2 className="font-semibold text-base text-white">
            10. Cookies e tecnologias semelhantes
          </h2>
          <p>
            O Website poderá utilizar cookies estritamente necessários ao seu
            funcionamento e, se configurado para tal, cookies analíticos ou de
            personalização. Quando exigido pela legislação aplicável, a
            utilização de cookies não essenciais dependerá do consentimento
            prévio do utilizador, o qual poderá ser gerido através das
            definições de navegador ou de um painel de preferências.
          </p>

          <h2 className="font-semibold text-base text-white">
            11. Alterações à Política de Privacidade
          </h2>
          <p>
            A CMVGest poderá atualizar a presente Política de Privacidade a
            qualquer momento, por exemplo para refletir alterações legislativas
            ou mudanças nos tratamentos de dados. Quaisquer alterações serão
            publicadas nesta página com indicação da data de última atualização.
            Recomendamos a consulta periódica desta página.
          </p>

          <p className="mt-6 text-xs text-white/50">
            Esta política tem caráter geral e informativo. Para garantir que
            todas as obrigações legais aplicáveis à sua situação específica são
            cumpridas, recomenda-se a obtenção de aconselhamento jurídico
            especializado.
          </p>
        </section>
      </div>
    </div>
  );
}

