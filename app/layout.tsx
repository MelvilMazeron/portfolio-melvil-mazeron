import type { Metadata } from "next";
import { Inter, Anek_Telugu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Définition des polices
const anekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Métadonnées de la page
export const metadata: Metadata = {
  title: "Melvil Mazeron",
  description: "Étudiant en Développement Web",
};

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(
          inter.variable,
          anekTelugu.variable,
          "font-sans h-full bg-background text-foreground antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
