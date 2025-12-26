import type { Metadata } from "next";
// import { Geist_Sans, Geist_Mono } from "next/font/google"; // Using generic fonts or need to configure if Geist is not installed by default in this version.
// create-next-app with --app usually configures fonts.
// I'll assume Inter or Outfit as requested in plan, but for now I'll stick to what was there or default generic sans.
// Actually, I'll use the default setup but add the Header.

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Gulinelli Advocacia | Especialistas em Direito Previdenciário",
  description: "Soluções jurídicas para empresas e pessoas físicas. Recuperação de créditos e planejamento previdenciário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <footer className="w-full py-6 text-center text-sm text-muted-foreground border-t border-border/40">
          © {new Date().getFullYear()} Gulinelli Advocacia. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
