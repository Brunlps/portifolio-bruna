import { profile, socials } from "../data/portfolio";

// Classes de foco e destaque repetidas nos links e no botão
const foco =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:focus-visible:outline-lime-400";

const Hero = () => (
  // Mobile: 1 coluna (texto e depois imagem). lg: 12 colunas, texto em 7 e imagem em 5
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 lg:grid-cols-12 lg:gap-12">
    <div className="flex flex-col items-start gap-6 lg:col-span-7">
      {/* Selo de disponibilidade: a bolinha pulsa, exceto para quem pediu menos movimento */}
      <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-1.5 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
        <span
          aria-hidden="true"
          className="size-2 animate-pulse rounded-full bg-lime-700 motion-reduce:animate-none dark:bg-lime-400"
        />
        {profile.disponibilidade}
      </p>

      <h1 className="font-display text-6xl leading-none sm:text-7xl lg:text-8xl">
        <span className="block">Olá, eu sou</span>
        <span className="block text-lime-700 dark:text-lime-400">
          {profile.nome}
        </span>
      </h1>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {profile.cargo}
        </p>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          {profile.bio}
        </p>
      </div>

      <ul className="flex flex-wrap gap-4">
        {socials.map(({ nome, url, icone: Icone }) => (
          <li key={nome}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-zinc-700 transition-colors hover:text-lime-700 motion-reduce:transition-none dark:text-zinc-300 dark:hover:text-lime-400 ${foco}`}
            >
              <Icone aria-hidden="true" size={20} />
              {nome}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contato"
        className={`rounded-full bg-lime-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-lime-800 motion-reduce:transition-none dark:bg-lime-400 dark:text-zinc-950 dark:hover:bg-lime-300 ${foco}`}
      >
        Vamos conversar
      </a>
    </div>

    <div className="flex justify-center lg:col-span-5">
      {/* width/height reservam o espaço da imagem antes de ela carregar (evita salto de layout) */}
      <img
        src="/avatar.webp"
        alt={`Ilustração de ${profile.nome} tirando uma selfie no espelho`}
        width="800"
        height="1067"
        className="h-auto w-full max-w-sm rounded-2xl"
      />
    </div>
  </div>
);

export default Hero;
