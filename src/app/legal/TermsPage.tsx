import React from "react";
import { useRouter } from "../router";

export function TermsPage() {
  const { navigate } = useRouter();
  return (
    <div className="min-h-screen w-full bg-[#0f0b11] text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-40 md:px-10 md:py-40">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            CMVGest
          </p>
          <h1 className="font-title text-3xl md:text-4xl font-semibold tracking-[-0.04em]">
            Termos e Condições de Utilização
          </h1>
          <p className="text-xs text-white/50">
            Última atualização: {new Date().toLocaleDateString("pt-PT")}
          </p>
        </header>

        <section className="space-y-5 text-sm leading-relaxed text-white/80">
          <p>
            Estes Termos e Condições regulam o acesso e utilização do website
            (&quot;Website&quot;) disponibilizado pela <strong>CMVGest</strong>,
            bem como a informação e serviços nele apresentados. Ao navegar no
            Website, o utilizador declara que leu, compreendeu e aceita estes
            Termos.
          </p>

          <h2 className="font-semibold text-base text-white">
            1. Identidade do responsável pelo Website
          </h2>
          <p>
            O Website é gerido pela <strong>CMVGest</strong>, adiante também
            designada por &quot;CMVGest&quot; ou &quot;nós&quot;. Para efeitos
            de contacto poderá utilizar o endereço eletrónico{" "}
            <a
              href="mailto:geral@cmvgest.com"
              className="underline decoration-white/40 underline-offset-4"
            >
              geral@cmvgest.com
            </a>{" "}
            ou o número de telefone (+351) 964 140 860.
          </p>

          <h2 className="font-semibold text-base text-white">
            2. Objeto do Website
          </h2>
          <p>
            O Website tem uma finalidade exclusivamente informativa e
            institucional, apresentando o conceito &quot;projetos chave na
            mão&quot;, bem como informação relativa a projetos, serviços,
            contactos e conteúdos associados à CMVGest. O Website não constitui
            um contrato, proposta vinculativa ou garantia de disponibilidade de
            qualquer imóvel ou serviço.
          </p>

          <h2 className="font-semibold text-base text-white">
            3. Utilização permitida
          </h2>
          <p>
            O utilizador compromete-se a utilizar o Website de forma diligente,
            correta e lícita, abstendo-se de:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              praticar atos que possam afetar, interromper ou danificar o
              funcionamento do Website ou dos sistemas associados;
            </li>
            <li>
              introduzir, transmitir ou difundir conteúdos ilegais, difamatórios,
              ofensivos, maliciosos ou que atentem contra direitos de terceiros;
            </li>
            <li>
              tentar aceder a áreas restritas, sistemas ou dados pessoais sem
              autorização;
            </li>
            <li>
              utilizar qualquer conteúdo do Website para fins comerciais sem
              autorização prévia e escrita da CMVGest.
            </li>
          </ul>

          <h2 className="font-semibold text-base text-white">
            4. Propriedade intelectual
          </h2>
          <p>
            Todos os conteúdos do Website, incluindo, designadamente, textos,
            imagens, ilustrações, logótipos, marcas, layout, design gráfico,
            vídeos e outros elementos, são propriedade da CMVGest ou utilizados
            com autorização dos respetivos titulares, encontrando-se protegidos
            por direitos de autor e demais leis de propriedade intelectual
            aplicáveis.
          </p>
          <p>
            É proibida a reprodução, modificação, distribuição, transmissão,
            publicação ou qualquer outra utilização, total ou parcial, de
            qualquer conteúdo do Website, sem autorização prévia e escrita da
            CMVGest, exceto nos casos permitidos pela lei para uso estritamente
            pessoal e não comercial.
          </p>

          <h2 className="font-semibold text-base text-white">
            5. Informação apresentada e responsabilidade
          </h2>
          <p>
            A CMVGest procura assegurar que toda a informação apresentada no
            Website é clara, atual e correta. Ainda assim, os conteúdos têm
            caráter meramente informativo e podem conter lapsos, erros
            tipográficos ou ser atualizados sem aviso prévio.
          </p>
          <p>
            A CMVGest não garante que a informação disponibilizada seja
            exaustiva ou que responda plenamente às expectativas do utilizador,
            nem assume responsabilidade por danos diretos ou indiretos
            resultantes:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>do uso ou impossibilidade de uso do Website;</li>
            <li>
              da confiança depositada na informação nele disponibilizada;
            </li>
            <li>
              de falhas técnicas, interrupções, vírus ou outros elementos
              prejudiciais que possam afetar o equipamento do utilizador.
            </li>
          </ul>

          <h2 className="font-semibold text-base text-white">
            6. Ligações para sites de terceiros
          </h2>
          <p>
            O Website pode conter hiperligações para sites de terceiros que são
            disponibilizadas apenas para conveniência do utilizador. Esses sites
            são da exclusiva responsabilidade dos respetivos titulares, não
            tendo a CMVGest qualquer controlo sobre os mesmos nem assumindo
            responsabilidade pelos respetivos conteúdos, políticas de
            privacidade ou termos de utilização.
          </p>

          <h2 className="font-semibold text-base text-white">
            7. Proteção de dados pessoais
          </h2>
          <p>
            A utilização do Website pode implicar o tratamento de dados pessoais
            (por exemplo, quando o utilizador preenche o formulário de
            contacto). Nesses casos, a CMVGest atua como responsável pelo
            tratamento e cumpre o Regulamento (UE) 2016/679 (RGPD) e a legislação
            nacional aplicável.
          </p>
          <p>
            A informação detalhada sobre as finalidades, bases legais, prazos de
            conservação, direitos dos titulares e demais aspetos relevantes
            encontra-se descrita na{" "}
            <button
              type="button"
              onClick={() => navigate("/privacy")}
              className="underline decoration-white/40 underline-offset-4 cursor-pointer"
            >
              Política de Privacidade
            </button>
            , que o utilizador deve ler atentamente.
          </p>

          <h2 className="font-semibold text-base text-white">8. Cookies</h2>
          <p>
            O Website poderá utilizar cookies ou tecnologias semelhantes para
            melhorar a experiência de navegação, analisar estatísticas de
            utilização ou permitir funcionalidades específicas. A utilização de
            cookies respeita o RGPD e a Diretiva ePrivacy, sendo prestada
            informação complementar na Política de Privacidade e/ou em aviso
            específico de cookies, quando aplicável.
          </p>

          <h2 className="font-semibold text-base text-white">
            9. Alterações aos Termos
          </h2>
          <p>
            A CMVGest reserva-se o direito de, a qualquer momento, modificar ou
            atualizar os presentes Termos, sem necessidade de aviso prévio.
            As versões atualizadas serão publicadas nesta página com indicação
            da data de última atualização. A continuação da utilização do
            Website após tais alterações implica a aceitação dos novos Termos.
          </p>

          <h2 className="font-semibold text-base text-white">
            10. Lei aplicável e foro
          </h2>
          <p>
            Os presentes Termos são regidos pela lei portuguesa. Para a
            resolução de quaisquer litígios relacionados com o Website ou com a
            sua utilização, é competente o tribunal português territorialmente
            competente, sem prejuízo das normas imperativas aplicáveis.
          </p>

          <p className="mt-6 text-xs text-white/50">
            Este texto tem caráter informativo e geral. Para assegurar a plena
            conformidade jurídica da sua situação concreta, recomenda-se a
            obtenção de aconselhamento jurídico especializado.
          </p>
        </section>
      </div>
    </div>
  );
}

