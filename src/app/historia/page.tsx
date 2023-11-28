import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Construindo História, Inspirando Futuro: Descubra a Trajetória do Nosso Clube.",
  description:
    "Nossa história é mais do que uma linha do tempo; é uma fonte de inspiração para o futuro. Descubra como construímos nossa história, inspirando gerações e deixando um impacto duradouro.",
};

export default function História() {
  return (
    <main className="h-screen">
      <header>
        <h2 className="text-primary-200 py-20 md:py-36 text-4xl md:text-7xl text-center uppercase font-bold">
          Nossa História
        </h2>
      </header>
    </main>
  );
}
