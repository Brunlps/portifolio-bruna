// Todo o conteúdo do site fica aqui. Os componentes só leem estes dados.
// Campos com "TODO: ..." ainda precisam ser preenchidos por Bruna.
// Em `icone` guardamos o componente do react-icons (sem JSX), ex.: icone: FaGithub.
// Quem usa renderiza assim: const Icone = item.icone; <Icone />

import { FaCss3Alt, FaGithub, FaJava, FaLinkedin } from "react-icons/fa";
import { FiCode, FiFolder, FiHome, FiMail, FiUser } from "react-icons/fi";
import {
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

export const profile = {
  nome: "Bruna Lopes",
  cargo: "Desenvolvedora Backend",
  bio: "Desenvolvo sistemas que organizam dados e interfaces que dão gosto de usar.",
  bioCompleta:
    "Comecei a programar com um objetivo bem concreto: criar a minha própria loja online. No caminho, descobri que gosto dos dois lados do desenvolvimento. No backend, me interesso por modelar e manipular dados com Python, FastAPI, Java e Spring Boot. No frontend, gosto de construir telas bonitas e fluidas com React e Tailwind. Hoje curso Análise e Desenvolvimento de Sistemas e sigo estudando JavaScript e React. Para clientes, crio soluções que melhoram a produtividade do dia a dia e landing pages para divulgar negócios e projetos.",
  localizacao: "Fortaleza, CE",
  disponibilidade: "Disponível para vagas e freelas",
};

export const socials = [
  { nome: "GitHub", url: "https://github.com/Brunlps", icone: FaGithub },
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/bruna-lopes-dev",
    icone: FaLinkedin,
  },
];

// `id` é o mesmo id da <section> correspondente na página
export const navLinks = [
  { id: "inicio", rotulo: "Início", icone: FiHome },
  { id: "sobre", rotulo: "Sobre", icone: FiUser },
  { id: "stack", rotulo: "Stack", icone: FiCode },
  { id: "projetos", rotulo: "Projetos", icone: FiFolder },
  { id: "contato", rotulo: "Contato", icone: FiMail },
];

export const stack = [
  { nome: "Python", icone: SiPython, categoria: "Backend" },
  { nome: "FastAPI", icone: SiFastapi, categoria: "Backend" },
  { nome: "Java", icone: FaJava, categoria: "Backend" },
  { nome: "Spring Boot", icone: SiSpringboot, categoria: "Backend" },
  { nome: "HTML", icone: SiHtml5, categoria: "Frontend" },
  { nome: "CSS", icone: FaCss3Alt, categoria: "Frontend" },
  { nome: "Tailwind CSS", icone: SiTailwindcss, categoria: "Frontend" },
  { nome: "JavaScript", icone: SiJavascript, categoria: "Frontend" },
  { nome: "React", icone: SiReact, categoria: "Frontend" },
  { nome: "Git", icone: SiGit, categoria: "Ferramentas" },
];

// GerFinance: app de finanças pessoais (Python/FastAPI)
// FoxFit: acompanhamento fitness (Java/Spring Boot)
// `demo` é null quando o projeto não tem versão publicada
export const featuredProjects = [
  {
    slug: "gerfinance",
    titulo: "GerFinance",
    descricao: "TODO: descrição completa do GerFinance",
    tecnologias: ["Python", "FastAPI"],
    repo: "TODO: link do repositório do GerFinance",
    demo: null,
  },
  {
    slug: "foxfit",
    titulo: "FoxFit",
    descricao: "TODO: descrição completa do FoxFit",
    tecnologias: ["Java", "Spring Boot"],
    repo: "TODO: link do repositório do FoxFit",
    demo: null,
  },
];

// whatsapp guarda só o número (DDI + DDD + número); o link wa.me é montado no componente
export const contact = {
  email: "TODO: e-mail",
  whatsapp: "TODO: número só com dígitos, ex.: 5585999999999",
  formspreeId: "TODO: id do Formspree",
};
