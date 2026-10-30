import { FiArrowUp } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";

const foco =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:focus-visible:outline-lime-400";

// lg:pb-28 deixa espaço para o DockNav (fixo embaixo da tela) não cobrir o rodapé
const Footer = () => (
  <footer className="border-t border-zinc-200 dark:border-zinc-800 lg:pb-28">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:justify-between">
      {/* O ano vem da data do navegador, então se atualiza sozinho */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} {profile.nome}
      </p>

      <ul className="flex flex-wrap justify-center gap-4">
        {socials.map(({ nome, url, icone: Icone }) => (
          <li key={nome}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-lime-700 motion-reduce:transition-none dark:text-zinc-300 dark:hover:text-lime-400 ${foco}`}
            >
              <Icone aria-hidden="true" size={20} />
              {nome}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#inicio"
        className={`inline-flex items-center gap-2 text-sm text-zinc-700 transition-colors hover:text-lime-700 motion-reduce:transition-none dark:text-zinc-300 dark:hover:text-lime-400 ${foco}`}
      >
        Voltar ao topo
        <FiArrowUp aria-hidden="true" size={18} />
      </a>
    </div>
  </footer>
);

export default Footer;
