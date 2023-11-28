import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Transparência",
  description:
    "Explore nossa página de transparência para entender como operamos, tomamos decisões e mantemos nossos compromissos. Estamos comprometidos em fornecer informações claras e acessíveis aos nossos usuários",
};

export default function Transparencia() {
  return (
    <main className="h-screen">
      <header>
        <h2 className="text-primary-200 py-20 md:py-36 text-4xl md:text-7xl text-center uppercase font-bold">
          Transparência
        </h2>
      </header>
      <div className="flex items-center justify-center animate-pulse">
        <Image src="/coming.svg" width={600} height={600} alt="" />
      </div>
    </main>
  );
}
