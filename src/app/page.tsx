"use client";
import Image from "next/image";
import Link from "next/link";
import TitulosList from "./Components/TitulosList";
import { titulos } from "@/data/titles";
import { Oswald } from "next/font/google";
import { EnvelopeSimple, InstagramLogo, Phone } from "@phosphor-icons/react";
import { navItems } from "@/data/navItems";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  const buttonStyle =
    "text-primary-100 border border-primary-100 rounded-2xl uppercase py-3 px-6 mt-10 hover:scale-105 transition-all";

  const textWithPrimaryColor = `text-primary-200 ${oswald.className}`;

  return (
    <div>
      {/* header */}
      <header className="px-4 lg:px-10 py-20 md:py-40 bg-[url('/background-home.jpg')] bg-no-repeat bg-cover h-screen ">
        <h2 className="text-6xl md:text-8xl uppercase max-w-5xl leading-snug font-bold">
          Junte-se a família{" "}
          <span className={textWithPrimaryColor}>desterro</span> e faça história
          no hóquei sobre a grama!
        </h2>
        <button className={`${buttonStyle} mt-10`}>
          Vem jogar com a gente!
        </button>
      </header>

      {/* hero */}
      <div className="px-4 lg:px-10 py-20 md:py-40 flex flex-col md:flex-row gap-20 md:gap-0 items-center justify-between">
        <div className="flex flex-col justify-between max-w-2xl">
          <h3 className="text-4xl md:text-6xl text-primary-200 font-bold uppercase mb-8">
            História do Clube
          </h3>
          <p>
            Fundado em 2004, o Hóquei Clube Desterro, localizado em
            Florianópolis, destaca-se no cenário esportivo. Com equipes nas
            categorias feminina e masculina, adulta e de base, o clube realiza
            treinos semanais focados no desenvolvimento e alta performance.
            Integrante da FHESC e membro da CBHG, conta com mais de 50 atletas e
            colaboradores. Participando ativamente de campeonatos Nacionais,
            Estaduais e Municipais, o HCD é respeitado no esporte, competindo
            anualmente pelo pódio. Seu compromisso com a excelência técnica e
            ética esportiva solidifica sua posição como referência no hóquei
            sobre a grama na região.
          </p>
          <div className="mt-12">
            <Link href="/historia" className={`${buttonStyle}`}>
              Conheça nossa história
            </Link>
          </div>
        </div>
        <div>
          <Image src="/ourhistory.png" alt="" width={750} height={650} />
        </div>
      </div>

      {/* nossos titulos */}
      <div className="px-4 lg:px-10 py-20 md:py-40 flex flex-col md:items-center ">
        <h3 className="text-4xl md:text-6xl text-primary-200 font-bold uppercase mb-8 md:m-auto">
          Nossos Títulos
        </h3>

        <TitulosList titulos={titulos} />
      </div>

      {/*frase*/}
      <div className="px-4 lg:px-10 py-20 md:py-40 bg-[url('/field-hockey.png')] bg-no-repeat bg-cover">
        <p
          className={`uppercase text-center font-bold max-w-6xl m-auto text-2xl md:text-4xl leading-tight ${oswald.className}`}
        >
          Atletas não nascem campeões - eles são{" "}
          <span className={textWithPrimaryColor}>
            selecionados, treinados, moldados e testados
          </span>
          . Desde 2000, o Hóquei Clube Desterro atua como uma força competitiva
          na região de Santa catarina.{" "}
          <span className={textWithPrimaryColor}>
            Aprimoramos o talento puro
          </span>{" "}
          até a maturidade com treinamentos de qualidade, exercícios primordiais
          e um{" "}
          <span className={textWithPrimaryColor}>
            verdadeiro amor pelo esporte.
          </span>{" "}
          Trabalho em equipe, perseverança, esportividade - essas são as
          características do Hóquei Clube Desterro.
        </p>
        <button className={`${buttonStyle} m-auto block`}>
          Entre em contato
        </button>
      </div>

      {/* footer */}

      <div className="px-4 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-40">
        <Link href="/" className="m-auto">
          <Image
            src="/logo.svg"
            alt="me"
            width="100"
            height="100"
            priority={true}
          />
        </Link>

        <div>
          <p className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-6 mt-6 md:mt-0">
            Mapa do site
          </p>
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  className="hover:text-primary-200 transition-all"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <p className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-6">Sobre</p>
          <p>
            Seja bem-vindo ao Hóquei Clube Desterro, o coração do hóquei sobre a
            grama em Florianópolis, SC. Nossa comunidade une-se em paixão pelo
            esporte, promovendo camaradagem e excelência. Junte-se a nós
            enquanto celebramos a emoção do hóquei e construímos memórias
            duradouras. Viva o espírito do jogo conosco!
          </p>
        </div>

        <div>
          <p className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-6">Contato</p>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <Phone size={22} />
              <p>+55 48 9946-6555</p>
            </a>
            <a href="#" className="flex items-center gap-2">
              <EnvelopeSimple size={22} />
              <p>hoqueidesterro@gmail.com</p>
            </a>
            <a href="#" className="flex items-center gap-2">
              <InstagramLogo size={22} />
              <p>@HCDESTERRO</p>
            </a>
          </div>
        </div>
      </div>

      {/* copyright */}

      <p className="text-center block text-sm pb-2">
        Copyright © {new Date().getFullYear()}.{" "}
        <a
          href="https://gabschlemper.dev/"
          target="_blank"
          className="hover:opacity-60 transition-all"
        >
          gabschlemper
        </a>
        . All rights reserved
      </p>
    </div>
  );
}
