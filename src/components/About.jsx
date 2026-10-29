import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/portfolio";

const About = () => (
  // Mobile: 1 coluna (imagem e depois texto). lg: 2 colunas lado a lado
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 lg:grid-cols-2 lg:gap-12">
    <div className="flex justify-center">
      {/* width/height reservam o espaço da imagem antes de ela carregar (evita salto de layout) */}
      <img
        src="/imagemsobre.webp"
        alt={`Ilustração de ${profile.nome} trabalhando no notebook na cozinha`}
        width="800"
        height="1067"
        loading="lazy"
        className="h-auto w-full max-w-md rounded-2xl object-cover"
      />
    </div>

    <div className="flex flex-col items-start gap-6">
      <h2 className="font-display text-5xl sm:text-6xl">Sobre mim</h2>
      <p className="text-zinc-600 dark:text-zinc-400">{profile.bioCompleta}</p>
      <a
        href="#contato"
        className="inline-flex items-center gap-2 rounded-full bg-lime-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-lime-800 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:bg-lime-400 dark:text-zinc-950 dark:hover:bg-lime-300 dark:focus-visible:outline-lime-400"
      >
        Vamos conversar
        <FiArrowUpRight aria-hidden="true" size={20} />
      </a>
    </div>
  </div>
);

export default About;
