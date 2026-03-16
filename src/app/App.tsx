import React from "react";
import { HomePage } from "./homepage";
import { ComingSoonPage } from "./coming-soon/ComingSoonPage";
import { TermsPage } from "./legal/TermsPage";
import { PrivacyPage } from "./legal/PrivacyPage";
import { RouterContext } from "./router";
import { Layout } from "./Layout";
import { TerrainPage } from "./projects/TerrainPage";
import { HousePage } from "./projects/HousePage";

export default function App() {
  // Lido a partir do ficheiro .env via Vite.
  // Exemplo em .env:
  // VITE_MAINTANCE_MODE=true  (mostra ComingSoon)
  // VITE_MAINTANCE_MODE=false (mostra o site principal)
  const isMaintenanceMode =
    (import.meta as any).env?.VITE_MAINTANCE_MODE === "true";

  // Permitir override via query string ?live=true, mesmo em manutenção.
  const forceLiveFromQuery =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("live") === "true"
      : false;

  const showHome = !isMaintenanceMode || forceLiveFromQuery;

  // Estado de path para navegação client-side.
  const [path, setPath] = React.useState(
    typeof window !== "undefined" ? window.location.pathname.toLowerCase() : "/"
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handlePopState = () => {
      setPath(window.location.pathname.toLowerCase());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = React.useCallback(
    (to: string) => {
      if (typeof window === "undefined") return;
      if (to === path) return;
      const currentSearch = window.location.search;
      let nextUrl = to;

      if (currentSearch) {
        const params = new URLSearchParams(currentSearch);
        if (params.get("live") === "true") {
          const nextParams = new URLSearchParams();
          nextParams.set("live", "true");
          nextUrl = `${to}?${nextParams.toString()}`;
        }
      }

      window.history.pushState({}, "", nextUrl);
      setPath(to.toLowerCase());
    },
    [path]
  );

  let pageContent: React.ReactNode;
  let pageTitle = "CMVGest – Projetos chave na mão em Vermil";
  let pageDescription =
    "CMVGest desenvolve projetos chave na mão em Vermil e região: terrenos, arquitetura e construção integrados, com foco em conforto, integridade e valorização do investimento.";

  if (!showHome) {
    pageContent = <ComingSoonPage />;
    pageTitle = "Em breve – CMVGest projetos chave na mão";
    pageDescription =
      "Estamos a preparar um novo conceito de projetos chave na mão em Vermil. Descubra em breve soluções completas para a sua próxima casa.";
  } else if (path.includes("terms")) {
    pageContent = <TermsPage />;
    pageTitle = "Termos e Condições – CMVGest";
    pageDescription =
      "Termos e condições de utilização do website CMVGest, incluindo informação sobre responsabilidade, propriedade intelectual e utilização permitida.";
  } else if (path.includes("privacy")) {
    pageContent = <PrivacyPage />;
    pageTitle = "Política de Privacidade – CMVGest";
    pageDescription =
      "Saiba como a CMVGest trata e protege os seus dados pessoais, em conformidade com o RGPD e legislação portuguesa.";
  } else if (path.includes("projetos/terreno") || path.endsWith("/terreno")) {
    pageContent = <TerrainPage />;
    pageTitle = "Lotes de terreno em Vermil – CMVGest";
    pageDescription =
      "Lotes de terreno em Vermil integrados em solução chave na mão: projeto, construção e acompanhamento completo para a sua futura casa.";
  } else if (
    path.includes("projetos/moradia-familiar") ||
    path.endsWith("/moradia-familiar")
  ) {
    pageContent = <HousePage />;
    pageTitle = "Moradia T3+1 familiar em Vermil – CMVGest";
    pageDescription =
      "Moradia T3+1 familiar em Vermil com soluções completas chave na mão: conforto, funcionalidade e excelente localização.";
  } else {
    pageContent = <HomePage />;
  }

  React.useEffect(() => {
    if (typeof document === "undefined") return;
    if (pageTitle) {
      document.title = pageTitle;
    }
    if (pageDescription) {
      const meta =
        document.querySelector('meta[name="description"]') ??
        (() => {
          const el = document.createElement("meta");
          el.name = "description";
          document.head.appendChild(el);
          return el;
        })();
      meta.setAttribute("content", pageDescription);
    }
  }, [pageTitle, pageDescription]);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {!showHome ? pageContent : <Layout routeKey={path}>{pageContent}</Layout>}
    </RouterContext.Provider>
  );
}
