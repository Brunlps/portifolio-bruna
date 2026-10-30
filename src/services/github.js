import axios from "axios";

// API pública do GitHub: não precisa de token (limite de 60 chamadas por hora por IP)
const URL_REPOS =
  "https://api.github.com/users/Brunlps/repos?per_page=100&sort=updated";
const TOPIC = "portfolio";

// Busca os repositórios do perfil e devolve só os que têm o topic "portfolio".
// `signal` vem de um AbortController: quem chama pode cancelar a requisição
// (por exemplo, quando o componente sai da tela antes da resposta chegar).
export const getPortfolioRepos = async (signal) => {
  // 1) Uma única chamada: a lista já traz o campo `topics` de cada repositório
  const { data } = await axios.get(URL_REPOS, { signal });

  return (
    data
      // 2) Fica só com o que não é fork e tem o topic "portfolio"
      .filter((repo) => !repo.fork && repo.topics?.includes(TOPIC))
      // 3) Devolve apenas os campos que a tela usa
      .map(
        ({
          name,
          description,
          language,
          stargazers_count,
          updated_at,
          html_url,
        }) => ({ name, description, language, stargazers_count, updated_at, html_url }),
      )
  );
};
