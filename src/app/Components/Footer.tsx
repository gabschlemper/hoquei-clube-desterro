"use client";
import { navItems } from "@/data/navItems";
import { EnvelopeSimple, InstagramLogo, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="px-4 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-20">
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
          <p className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-6">
            Sobre nós
          </p>
          <p>
            Seja bem-vindo ao Hóquei Clube Desterro, o coração do hóquei sobre a
            grama em Florianópolis, SC. Nossa comunidade une-se em paixão pelo
            esporte, promovendo camaradagem e excelência. Junte-se a nós
            enquanto celebramos a emoção do hóquei e construímos memórias
            duradouras. Viva o espírito do jogo conosco!
          </p>
        </div>

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

        <div>
          <p className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-6">
            Contato
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://api.whatsapp.com/send/?phone=554899466555"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Phone size={22} />
              <p>+55 48 9946-6555</p>
            </a>
            <a
              href="mailto:hoqueidesterro@gmail.com"
              target="_blank"
              className="flex items-center gap-2"
            >
              <EnvelopeSimple size={22} />
              <p>hoqueidesterro@gmail.com</p>
            </a>
            <a
              href="https://www.instagram.com/hcdesterro/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <InstagramLogo size={22} />
              <p>@HCDESTERRO</p>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center block text-sm pb-2">
        Copyright © {new Date().getFullYear()}.{" "}
        <a
          href="https://gabschlemper.dev/"
          target="_blank"
          className="hover:opacity-60 transition-all"
        >
          gabschlemper
        </a>
        . All rights reserved.
      </p>
    </div>
  );
}
