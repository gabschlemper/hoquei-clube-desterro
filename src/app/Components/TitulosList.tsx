"use client";
import { useState } from "react";

type TitulosListProps = {
  titulos: Record<string, { id: number; nome: string; ano: string }[]>;
};

const TitulosList: React.FC<TitulosListProps> = ({ titulos }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<string>("masculine");

  const isMasculine = categoriaSelecionada === "masculine";
  const isFeminine = categoriaSelecionada === "feminine";

  return (
    <div>
      <div className="flex items-center gap-4 mb-10 justify-center">
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

      <ul className="min-h-[600px]">
        {titulos[categoriaSelecionada].map((titulo) => (
          <li key={titulo.id}>
            {titulo.ano} - {titulo.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TitulosList;
