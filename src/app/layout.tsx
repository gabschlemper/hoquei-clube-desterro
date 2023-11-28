import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/react";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Hóquei Clube Desterro",
  description:
    "Hóquei Clube Desterro em Florianópolis. Oferecemos treinamentos de alto nível e competimos em campeonatos locais e nacionais. Junte-se a nós e faça história no hóquei catarinense. Desenvolvimento, paixão e vitórias, tudo em um só lugar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
