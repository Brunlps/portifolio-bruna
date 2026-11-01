import { FiArrowRight } from "react-icons/fi";
import { servicos } from "../data/portfolio";

const estiloLink =
  "inline-flex items-center gap-1 font-semibold text-lime-700 hover:underline motion-reduce:transition-none dark:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:focus-visible:outline-lime-400";

const Servicos = () => (
  <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12">
    <h2 className="font-display text-5xl sm:text-6xl">Como posso ajudar</h2>

    {/* 1 coluna no mobile e 3 em lg */}
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* key = titulo: cada serviço tem um título único */}
      {servicos.map(({ titulo, texto, icone: Icone }) => (
        <li
          key={titulo}
          className="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-lime-700 motion-reduce:transition-none dark:border-zinc-800 dark:hover:border-lime-400"
        >
          <Icone
            aria-hidden="true"
            size={32}
            className="shrink-0 text-lime-700 dark:text-lime-400"
          />
          <h3 className="font-display text-4xl">{titulo}</h3>
          <p className="text-zinc-600 dark:text-zinc-400">{texto}</p>

          {/* mt-auto empurra o link para o fim do card, alinhando os três */}
          <a href="#contato" className={`mt-auto pt-2 ${estiloLink}`}>
            Pedir orçamento
            <FiArrowRight aria-hidden="true" size={18} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Servicos;
