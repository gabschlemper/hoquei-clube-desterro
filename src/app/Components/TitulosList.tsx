"use client";
import { Oswald } from "next/font/google";
import { useState } from "react";

type TitulosListProps = {
  titulos: Record<string, { id: number; nome: string; ano: string }[]>;
};

const oswald = Oswald({ subsets: ["latin"] });

const TitulosList: React.FC<TitulosListProps> = ({ titulos }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<string>("masculine");

  const isMasculine = categoriaSelecionada === "masculine";
  const isFeminine = categoriaSelecionada === "feminine";

  return (
    <div>
      <div className="flex md:items-center gap-4 my-10 md:justify-center">
        <button
          className={`uppercase font-bold
            ${isMasculine ? "border-b border-primary-100" : ""}
          `}
          onClick={() => setCategoriaSelecionada("masculine")}
        >
          Masculino
        </button>
        <button
          className={`uppercase font-bold
            ${isFeminine ? "border-b border-primary-100" : ""}
          `}
          onClick={() => setCategoriaSelecionada("feminine")}
        >
          Femininos
        </button>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {titulos[categoriaSelecionada].map((titulo) => (
          <li
            key={titulo.id}
            className="shadow-3xl flex justify-center flex-col items-center p-6 bg-black shadow-3xl rounded-xl "
          >
            <p
              className={`text-md font-bold text-primary-200 ${oswald.className}`}
            >
              {titulo.ano}
            </p>
            <p className={`text-sm font-bold ${oswald.className}`}>
              {titulo.nome}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TitulosList;
