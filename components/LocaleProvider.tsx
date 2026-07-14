"use client";

import { createContext, useContext } from "react";
import { translations, type Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>("es");

export function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT(key: string): string {
  const locale = useLocale();
  const keys = key.split(".");
  let value: any = translations[locale];
  for (const k of keys) {
    if (value == null) return key;
    value = value[k];
  }
  return value ?? key;
}
