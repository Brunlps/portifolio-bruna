# Portfólio Bruna Lopes

Portfólio pessoal de Bruna Lopes, desenvolvedora full stack em Fortaleza, CE, para apresentar projetos a recrutadores e receber contatos de clientes de freela.

**Site:** https://portifolio-bruna.onrender.com

## Funcionalidades

- Página única em português, com rolagem suave entre as seções: início, sobre, stack, projetos e contato.
- Menu flutuante no desktop (a partir de `lg`) que destaca a seção ativa, e menu hambúrguer no celular e no tablet.
- Tema claro e escuro, alternado por botão e aplicado pela classe `.dark`.
- Projetos em destaque e repositórios buscados na API pública do GitHub (filtrados pelo topic `portfolio`, sem token).
- Formulário de contato enviado ao Formspree, com estados de envio, sucesso e erro, e botão de WhatsApp.
- Todo o conteúdo (textos, links, stack e projetos) vem de `src/data/portfolio.js`.

## Tecnologias

- React 19
- Vite 8
- Tailwind CSS 4
- React Router 8
- react-icons
- axios
- ESLint

## Como rodar

Requisitos: Node.js 20.19 ou superior (ou 22.12 ou superior) e npm.

```bash
# instalar as dependências
npm install

# servidor de desenvolvimento (http://localhost:5173)
npm run dev

# build de produção (gera a pasta dist/)
npm run build
```

Outros comandos úteis: `npm run lint` verifica o código com o ESLint e `npm run preview` serve o build localmente.

## Estrutura de pastas

```
public/          imagens (avatar.webp, imagemsobre.webp)
docs/            prints do projeto
src/
  components/    Hero, About, Stack, FeaturedProjects, GithubRepos,
                 Contact, Footer, DockNav, HeaderMobile, NavContent, ThemeToggle
  data/          portfolio.js (todo o conteúdo do site)
  hooks/         useTheme.js, useActiveSection.js
  layouts/       PageLayout.jsx
  pages/         Home.jsx
  routes/        Rotas.jsx
  services/      github.js (chamada à API do GitHub)
  styles/        index.css (tema e estilos globais)
```

## Prints

Os prints ficam na pasta [docs/](docs/).

TODO: adicionar os prints (desktop e celular, tema claro e escuro) e referenciá-los aqui.
