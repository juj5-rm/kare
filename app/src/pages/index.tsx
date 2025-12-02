import Carrusel from "@/components/Carousel/Carousel";
import { Jura, Roboto } from "next/font/google";
import PrincipalCard from "@/components/principalCard/principalCard";
const jura = Jura({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const titles = {
  documentos: "gestiona tus\ndocumentos",
  seguridad: "completamente\nseguro",
  facil: "+ facil\n+ rapido",
};

export default function Home() {
  return (
    <div className={`${jura.className} ${roboto.className} flex flex-col items-center justify-center`}>
      <Carrusel />
      <div className={`w-full z-10 flex mt-[-4vw] bg-gris-container-clubes justify-center`}>
        <div className="flex justify-around w-[80%] px-24 py-8">
          <PrincipalCard
            title={titles.documentos}
            //imageUrl="/aventureros.svg"
            imageUrl="/miembros.svg"
            onButtonClick="/informacion#1"
            label="+Información"
            width={70}
            bgColor="bg-sigca-white shadow-lg "
            color="text-sigca-black"
          />
          <PrincipalCard
            title={titles.seguridad}
            //imageUrl="/conquistadores.svg"
            imageUrl="/seguros.svg"
            onButtonClick="/informacion#2"
            label="+Información"
            width={70}
            bgColor="bg-sigca-white shadow-lg "
            color="text-sigca-black"
          />
          <PrincipalCard
            title={titles.facil}
            //imageUrl="/guias.svg"
            imageUrl="/investiduras.svg"
            onButtonClick="/informacion#3"
            label="+Información"
            width={70}
            bgColor="bg-sigca-white shadow-lg "
            color="text-sigca-black"
          />
        </div>
      </div>
    </div>
  );
}
