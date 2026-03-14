import React from "react";

export type RouterContextValue = {
  path: string;
  navigate: (to: string) => void;
};

export const RouterContext = React.createContext<RouterContextValue | null>(
  null
);

export function useRouter() {
  const ctx = React.useContext(RouterContext);
  if (!ctx) {
    throw new Error("useRouter must be used within a RouterContext provider");
  }
  return ctx;
}

