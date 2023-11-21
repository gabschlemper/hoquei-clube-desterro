import Image from "next/image";
import Container from "./Components/Container";

export default function Home() {
  return (
    <>
      <header className="px-4 lg:px-10 py-40 bg-[url('/background-home.jpg')] bg-no-repeat bg-cover">
        <h2 className="text-8xl uppercase max-w-6xl leading-snug font-bold">
          Junte-se a família <span className="text-primary-200">desterro</span>{" "}
          e faça história no hóquei sobre a grama!
        </h2>
        <button className="text-primary-100 border border-primary-100 rounded-2xl uppercase py-3 px-6 mt-10 hover:scale-105 transition-all">
          Vem jogar com a gente!
        </button>
      </header>

      <div className="px-4 lg:px-10 py-40 flex">
        <div className="flex flex-col flex-1">
          <h3 className="text-6xl text-primary-200 border-b border-primary-200 font-bold uppercase">
            História do Clube
          </h3>
          <p>
            O Hóquei Clube Desterro, fundado em 2004, integra a Federação
            Catarinense de Hóquei Sobre a Grama – FHESC, e é membro da
            Confederação Brasileira – CBHG. Atualmente conta com mais de 50
            atletas e colaboradores, participando todos os anos de Campeonatos
            Nacionais, Estaduais e Municipais. Grandemente respeitado no
            esporte, é um dos grandes clubes na disputa pelo pódio nesses
            campeonatos em todos os anos.
          </p>
          <button className="text-primary-100 border border-primary-100 rounded-2xl uppercase py-3 px-6 mt-10 hover:scale-105 transition-all">
            Conheça nossa história
          </button>
        </div>
        <div className="flex-1">
          <Image src="/ourhistory.png" alt="" width={750} height={650} />
        </div>
      </div>
    </>
  );
}
