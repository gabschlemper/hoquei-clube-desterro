"use client";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "História do Clube",
    url: "/historia",
  },
  {
    title: "Projetos",
    url: "/projetos",
  },
  {
    title: "Calendário",
    url: "/calendario",
  },
  {
    title: "Transparência",
    url: "/transparencia",
  },
  {
    title: "Galeria de Fotos",
    url: "/fotos",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <nav className="flex items-center justify-between py-4 px-4 lg:px-10">
        <Link href="/" onClick={() => setSelectedItem("")}>
          <Image
            src="/logo.svg"
            alt="me"
            width="40"
            height="40"
            priority={true}
          />
        </Link>

        <ul className="hidden md:flex gap-6 uppercase">
          {navItems.map((item) => {
            return (
              <li key={item.title}>
                <Link
                  className={`hover:text-primary-200 transition-all ${
                    selectedItem === item.title ? "text-primary-100" : ""
                  }`}
                  href={item.url}
                  onClick={() => setSelectedItem(item.title)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items gap-2 uppercase py-6 border-b border-primary-100 px-4 lg:px-10">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                className={`hover:text-primary-200 transition-all ${
                  selectedItem === item.title ? "text-primary-100" : ""
                }`}
                href={item.url}
                onClick={() => {
                  setSelectedItem(item.title);
                  setIsMenuOpen(false);
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
