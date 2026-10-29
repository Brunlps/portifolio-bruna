import { FiArrowUpRight } from "react-icons/fi";
import { featuredProjects } from "../data/portfolio";

// Link só aparece se for uma URL de verdade (campos "TODO: ..." não viram link falso)
const ehUrl = (valor) => typeof valor === "string" && valor.startsWith("http");

const estiloLink =
  "inline-flex items-center gap-1 font-semibold text-lime-700 hover:underline motion-reduce:transition-none dark:text-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:focus-visible:outline-lime-400";

const FeaturedProjects = () => (
  <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12">
    <h2 className="font-display text-5xl sm:text-6xl">Projetos</h2>

    {/* 1 coluna no mobile, 2 em md e 3 em lg */}
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* key = slug: identificador único de cada projeto */}
      {featuredProjects.map(
        ({ slug, titulo, descricao, tecnologias, repo, demo }, index) => (
          <li
            key={slug}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-lime-700 motion-reduce:transition-none dark:border-zinc-800 dark:hover:border-lime-400"
          >
            {/* index começa em 0: soma 1 e completa com zero à esquerda (01, 02...) */}
            <span className="font-display text-2xl text-lime-700 dark:text-lime-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-4xl">{titulo}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{descricao}</p>

            <ul className="flex flex-wrap gap-2">
              {tecnologias.map((tec) => (
                <li
                  key={tec}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                >
                  {tec}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-4 pt-2">
              {ehUrl(repo) && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={estiloLink}
                >
                  Código
                  <FiArrowUpRight aria-hidden="true" size={18} />
                </a>
              )}
              {ehUrl(demo) && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={estiloLink}
                >
                  Ver online
                  <FiArrowUpRight aria-hidden="true" size={18} />
                </a>
              )}
            </div>
          </li>
        ),
      )}
    </ul>
  </div>
);

export default FeaturedProjects;
