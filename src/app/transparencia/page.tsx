import Image from "next/image";

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
