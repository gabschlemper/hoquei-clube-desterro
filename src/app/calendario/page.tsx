import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendário Esportivo",
  description:
    "Explore nosso calendário esportivo e mergulhe em um mundo de competições emocionantes. De grandes torneios a eventos especializados, mantenha-se atualizado com as datas que marcarão o ano esportivo",
};

export default function Calendario() {
  return (
    <main className="h-screen">
      <header>
        <h2 className="text-primary-200 py-20 md:py-36 text-4xl md:text-7xl text-center uppercase font-bold">
          Calendário Esportivo
        </h2>
      </header>
      <div className="flex flex-col gap-6 items-center">
        <h3 className="text-4xl mb-9 text-primary-200 font-bold">
          Temporada 2023
        </h3>
        <a
          href="https://hoqueisobregrama.com.br/wp-content/uploads/2023/04/Calendario-CBHG-2023.pdf"
          target="_blank"
          className="hover:opacity-60 transition-all uppercase underline"
        >
          Calendário 2023
        </a>
        <a
          href="https://hoqueisobregrama.com.br/wp-content/uploads/2023/05/TABELA-ATUALIZADA-CAMPEONATO-BRASILEIRO-DE-HOQUEI-MASCULINO-E-FEMININOADULTO-2023-2.pdf"
          target="_blank"
          className="hover:opacity-60 transition-all uppercase underline"
        >
          Tabela campeonato Brasileiro de Hóquei masculino e feminino adulto
          2023 - Atualizada
        </a>
      </div>
    </main>
  );
}
