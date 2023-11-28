import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projetos | Hóquei Clube Desterro",
  description:
    "Faça parte da mudança positiva! Conheça nossos projetos sociais que abordam questões importantes e criam impacto real. Saiba como você pode se envolver e contribuir para um mundo melhor.",
};

export default function Projetos() {
  return (
    <main className="h-screen">
      <header>
        <h2 className="text-primary-200 py-20 md:py-36 text-4xl md:text-7xl text-center uppercase font-bold">
          Projetos
        </h2>
      </header>
      <div className="flex items-center justify-center animate-pulse">
        <Image src="/coming.svg" width={600} height={600} alt="" />
      </div>
    </main>
  );
}
