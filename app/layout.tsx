import type { Metadata } from "next";
import { Instrument_Sans, Young_Serif } from "next/font/google";
import "./globals.css";

const titulo = Young_Serif({ variable: "--font-young-serif", weight: "400", subsets: ["latin"] });
const texto = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Residências Lioz — 14 casas em Marvila, Lisboa",
  description:
    "Apartamentos T1 a T3 em Marvila, junto ao Tejo. Projeto de demonstração criado pela GG Studio.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${titulo.variable} ${texto.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
