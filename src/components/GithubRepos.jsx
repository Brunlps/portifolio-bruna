import { useEffect, useState } from "react";
import { FiExternalLink, FiStar } from "react-icons/fi";
import { getPortfolioRepos } from "../services/github";
import { featuredProjects, socials } from "../data/portfolio";

const perfilGithub = socials.find(({ nome }) => nome === "GitHub")?.url;

// Data no formato brasileiro, ex.: 28 de out. de 2026
const formatarData = new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" });

// Já aparecem em "Projetos"; comparamos em minúsculas para não depender de maiúsculas
const urlsDestaque = featuredProjects.map(({ repo }) => repo.toLowerCase());

const foco =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:focus-visible:outline-lime-400";

const GithubRepos = () => {
  // Três estados: carregando (começa true), erro e a lista de repositórios
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [repos, setRepos] = useState([]);

  // Roda uma vez, quando o componente aparece na tela
  useEffect(() => {
    // O controller permite cancelar a requisição se o componente sair da tela
    const controller = new AbortController();

    getPortfolioRepos(controller.signal)
      .then((lista) => {
        // Tira os que já estão nos projetos em destaque
        setRepos(
          lista.filter(({ html_url }) => !urlsDestaque.includes(html_url.toLowerCase())),
        );
        setCarregando(false);
      })
      .catch(() => {
        // Se foi cancelado (cleanup abaixo), não é erro: o componente já saiu ou vai refazer
        if (controller.signal.aborted) return;
        setErro(true);
        setCarregando(false);
      });

    // Cleanup: o React chama antes de rodar o efeito de novo e ao remover o componente
    return () => controller.abort();
  }, []);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-12">
      <h3 className="font-display text-4xl">Mais no GitHub</h3>

      {carregando && (
        // Esqueleto: 3 cards cinzas pulsando enquanto a resposta não chega
        <ul aria-hidden="true" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((n) => (
            <li
              key={n}
              className="h-32 animate-pulse rounded-2xl bg-zinc-200 motion-reduce:animate-none dark:bg-zinc-800"
            />
          ))}
        </ul>
      )}

      {/* Erro e lista vazia usam a mesma mensagem, com link para o perfil */}
      {!carregando && (erro || repos.length === 0) && (
        <p className="text-zinc-600 dark:text-zinc-400">
          Não consegui carregar os repositórios agora.{" "}
          <a
            href={perfilGithub}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold text-lime-700 hover:underline dark:text-lime-400 ${foco}`}
          >
            Veja todos no meu perfil do GitHub
          </a>
          .
        </p>
      )}

      {!carregando && !erro && repos.length > 0 && (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map(
            ({ name, description, language, stargazers_count, updated_at, html_url }) => (
              <li
                key={html_url}
                className="flex flex-col gap-3 rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-lime-700 motion-reduce:transition-none dark:border-zinc-800 dark:hover:border-lime-400"
              >
                <a
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-semibold hover:text-lime-700 dark:hover:text-lime-400 ${foco}`}
                >
                  {name}
                  <FiExternalLink aria-hidden="true" size={16} />
                </a>

                {/* Sem descrição no GitHub: o parágrafo não aparece */}
                {description && (
                  <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {language && <span>{language}</span>}
                  <span className="inline-flex items-center gap-1">
                    <FiStar aria-hidden="true" size={14} />
                    {stargazers_count}
                    <span className="sr-only"> estrelas</span>
                  </span>
                  <span>
                    Atualizado em{" "}
                    <time dateTime={updated_at}>
                      {formatarData.format(new Date(updated_at))}
                    </time>
                  </span>
                </div>
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
};

export default GithubRepos;
