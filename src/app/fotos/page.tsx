import { galleryData } from "@/data/gallery";
import Image from "next/image";

export default function Fotos() {
  return (
    <main className="px-4 lg:px-10">
      <header>
        <h2 className="text-primary-200 py-20 md:py-36 text-4xl md:text-7xl text-center uppercase font-bold">
          Galeria de Fotos
        </h2>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-auto">
        {galleryData.map((item, idx) => (
          <div key={idx} className="rounded-lg shadow-xl">
            <Image
              src={item.img}
              width={400}
              height={400}
              alt="Foto equipe"
              className="aspect-auto"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
