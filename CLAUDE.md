# Instruções para o agente: Portfólio Bruna Lopes

Este arquivo define o escopo do projeto e o modo de trabalhar. Leia inteiro antes de qualquer tarefa. Se algo aqui conflitar com um pedido meu, pare e me pergunte.

---

## 1. O projeto

Portfólio pessoal de **Bruna Lopes**, desenvolvedora backend júnior (Python/FastAPI, Java/Spring Boot), em Fortaleza, CE.

- **Objetivo:** apresentar meus projetos a recrutadores e receber contatos de clientes de freela.
- **Formato:** página única, em português (pt-BR), com rolagem suave entre seções.
- **Prazo:** 5 sprints de 3h, de 26/10 a 30/10/2026. Entrega (deploy) na sexta, 30/10.

---

## 2. Decisões fechadas (não reabrir)

Estas decisões já foram tomadas. Não proponha trocar nenhuma delas, a não ser que esteja quebrando o build.

| Área | Decisão |
|---|---|
| Stack | React 19, Vite 8, Tailwind CSS 4, React Router 8, react-icons, axios, ESLint |
| Cores | Fundo zinc-950 (escuro) / zinc-50 (claro). Destaque lime-400 no escuro, lime-700 no claro |
| Fontes | Bebas Neue para títulos (`font-display`), Inter para texto (`font-sans`) |
| Tema | Claro e escuro por classe `.dark`, já implementado (`useTheme`, `ThemeToggle`) |
| Navegação mobile/tablet | `HeaderMobile` com menu hambúrguer, abaixo de `lg` |
| Navegação desktop | `DockNav` flutuante fixo embaixo da tela, a partir de `lg`, destacando a seção ativa |
| Seções e ids | `inicio`, `sobre`, `stack`, `projetos`, `contato`, nesta ordem |
| Conteúdo | Tudo vem de `src/data/portfolio.js` |
| GitHub | Repositórios via API pública com axios, filtrados pelo topic `portfolio`, sem token |
| Contato | Formulário enviado ao Formspree via axios + botão de WhatsApp |
| Imagens | Ficam em `public/`: `avatar.webp` (hero) e `imagemsobre.webp` (sobre). No JSX, use `src="/avatar.webp"` e `src="/imagemsobre.webp"`, sem import |
| Git | Trabalho na branch `redesign`. Merge no `main` só na Sprint 5 |

---

## 3. Escopo

### Dentro do escopo
- Componentes: `Hero`, `About`, `Stack`, `FeaturedProjects`, `GithubRepos`, `Contact`, `Footer`, `DockNav`, `HeaderMobile`, `NavContent`, `ThemeToggle`
- Hook `useActiveSection` (IntersectionObserver)
- Service `src/services/github.js`
- Arquivo de dados `src/data/portfolio.js`
- Responsividade (375px, 768px, 1280px), acessibilidade básica e os dois temas
- README e deploy na Vercel (eu faço o deploy; você só orienta)

### Fora do escopo (não fazer, mesmo que pareça uma melhoria)
- Migrar para TypeScript ou Next.js
- Instalar bibliotecas novas (framer-motion, shadcn, i18n, bibliotecas de formulário etc.)
- Criar páginas ou rotas novas além da página única
- Carrossel, blog, área administrativa, backend próprio
- Testes automatizados (ficam para depois da entrega)
- Versão em inglês
- Trocar cores, fontes ou o layout definido acima
- Refatorar arquivos que a tarefa não citou

Se você achar que algo fora do escopo é importante, **não faça**: anote na seção "Ideias para depois" do seu feedback.

---

## 4. Fluxo obrigatório em toda tarefa

### Passo 1: Avaliar o projeto (antes de alterar qualquer arquivo)
1. Rode `git branch --show-current` e `git status`.
2. Leia os arquivos ligados à tarefa e os que eles importam.
3. Rode `npm run lint` e `npm run build` para saber o estado atual.
4. Identifique em qual sprint e tarefa estamos.

### Passo 2: Me devolver um feedback, neste formato

```
## Feedback antes da tarefa

**Tarefa:** [sprint e nome da tarefa]
**Branch:** [branch atual] | **Arquivos não commitados:** [sim/não, quais]
**Lint:** [ok / N erros] | **Build:** [ok / falhou]

**Estado do que a tarefa envolve:**
- [o que já existe e como está]

**Problemas encontrados:**
- [bugs, avisos, HTML inválido, conflitos com as decisões fechadas]

**Plano:**
- [arquivos que vou criar ou alterar e o que muda em cada um]

**Fora do escopo / ideias para depois:**
- [se houver]

**Dúvidas:**
- [o que preciso que você decida, se houver]
```

### Passo 3: Esperar minha confirmação
Não edite nada até eu responder **"pode seguir"** (ou ajustar o plano). Se eu disser só "pode seguir", siga exatamente o plano do feedback.

### Passo 4: Executar
- Faça **só** o que a tarefa pede e o plano listou.
- Se no meio do caminho surgir algo que exige mudar o plano, pare e me avise antes.

### Passo 5: Encerrar
1. Rode `npm run lint` e `npm run build` e mostre o resultado.
2. Liste os arquivos alterados.
3. Explique em poucas linhas o que mudou e **por quê**. Estou aprendendo React e prefiro entender como funciona antes de seguir.
4. Diga o que devo conferir no navegador.
5. Faça commit **só** se a tarefa pedir, com mensagem no padrão abaixo.

---

## 5. Regras de código

- Componentes funcionais. O nome do componente é igual ao nome do arquivo (`About.jsx` exporta `About`).
- Estilo só com classes do Tailwind. Nada de CSS novo fora do arquivo principal de tema.
- Sem larguras, alturas ou margens fixas que quebrem no celular (`w-[5px]`, `h-screen`, `ml-10` etc.). Use flex ou grid com `gap`.
- Todo elemento com cor precisa funcionar nos dois temas (use as variantes `dark:`).
- Lime sobre fundo claro: sempre `lime-700` ou mais escuro, por contraste.
- Textos, links, projetos e stack vêm do `portfolio.js`. Nada de texto pessoal fixo no componente.
- **Nunca invente conteúdo pessoal** (bio, e-mail, telefone, descrições, links). Quando faltar, use `"TODO: ..."`.
- Todo texto visível em português.
- Acessibilidade: `alt` descritivo nas imagens, `<label htmlFor>` nos campos, `aria-label` em botões só com ícone, `aria-current` no link ativo, foco visível.
- Links externos com `target="_blank"` e `rel="noopener noreferrer"`. Nenhum `href=""` ou `href="#"` solto.
- Animações respeitam `motion-reduce`.
- Código novo de hooks e chamadas de API vem com comentários curtos explicando o fluxo.

---

## 6. Git

- Branch de trabalho: `redesign`.
- Mensagens de commit em português, no padrão:
  - `feat:` funcionalidade nova
  - `fix:` correção
  - `style:` só visual
  - `refactor:` reorganização sem mudar comportamento
  - `docs:` documentação
- Nunca use `git push --force`, `git reset --hard` ou apague branches sem eu pedir.

---

## 7. Estrutura esperada

```
src/
  components/   Hero, About, Stack, FeaturedProjects, GithubRepos,
                Contact, Footer, DockNav, HeaderMobile, NavContent, ThemeToggle
  data/         portfolio.js
  hooks/        useTheme.js, useActiveSection.js
  services/     github.js
  pages/        Home.jsx
public/         avatar.webp, imagemsobre.webp
```

---

## 8. Plano das sprints (referência)

| Dia | Sprint | Entrega |
|---|---|---|
| Seg 26/10 | 1. Fundação | Tema, limpeza, imagens WebP e `portfolio.js` |
| Ter 27/10 | 2. Navegação | Seções com ids, `DockNav`, `useActiveSection`, `HeaderMobile` |
| Qua 28/10 | 3. Hero, Sobre e Stack | Primeira dobra e seções de apresentação |
| Qui 29/10 | 4. Projetos e GitHub | `FeaturedProjects` e `GithubRepos` com axios |
| Sex 30/10 | 5. Contato e entrega | Formspree, Footer, revisão, README, merge e deploy |

Não adiante tarefas de outra sprint, mesmo que pareça rápido.