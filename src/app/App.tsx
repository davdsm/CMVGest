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

  if (path.includes("terms")) {
    pageContent = <TermsPage />;
  } else if (path.includes("privacy")) {
    pageContent = <PrivacyPage />;
  } else if (path.includes("projetos/terreno") || path.endsWith("/terreno")) {
    pageContent = <TerrainPage />;
  } else if (
    path.includes("projetos/moradia-familiar") ||
    path.endsWith("/moradia-familiar")
  ) {
    pageContent = <HousePage />;
  } else {
    pageContent = <HomePage />;
  }

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {!showHome ? (
        <ComingSoonPage />
      ) : (
        <Layout routeKey={path}>{pageContent}</Layout>
      )}
    </RouterContext.Provider>
  );
}
