// Todo o conteúdo do site fica aqui. Os componentes só leem estes dados.
// Em `icone` guardamos o componente do react-icons (sem JSX), ex.: icone: FaGithub.
// Quem usa renderiza assim: const Icone = item.icone; <Icone />

import { FaCss3Alt, FaGithub, FaJava, FaLinkedin } from "react-icons/fa";
import {
  FiBriefcase,
  FiCode,
  FiFolder,
  FiHome,
  FiLayout,
  FiMail,
  FiSettings,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
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
  cargo: "Desenvolvedora Full Stack",
  bio: "Crio sites e sistemas que ajudam o seu negócio a ser encontrado, atender melhor e ganhar tempo.",
  bioCompleta:
    "Comecei a programar porque queria criar a minha própria loja online. Por isso entendo, na prática, o que um negócio precisa na internet: ser fácil de encontrar, passar confiança e funcionar bem no celular. Hoje crio landing pages para divulgar produtos e serviços, sites com catálogo e sistemas sob medida que organizam o dia a dia, como cadastros, controle financeiro e relatórios. Explico cada etapa sem termos técnicos, até o projeto estar no ar.",
  localizacao: "Fortaleza, CE",
  disponibilidade: "Disponível para novos projetos",
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
  { id: "servicos", rotulo: "Serviços", icone: FiBriefcase },
  { id: "stack", rotulo: "Ferramentas", icone: FiCode },
  { id: "projetos", rotulo: "Projetos", icone: FiFolder },
  { id: "contato", rotulo: "Contato", icone: FiMail },
];

// Cards da seção "Como posso ajudar" (id "servicos")
export const servicos = [
  {
    titulo: "Landing page",
    texto:
      "Se você quer divulgar um produto, serviço ou evento com uma página bonita, que funcione no celular e leve o cliente até o seu WhatsApp.",
    icone: FiLayout,
  },
  {
    titulo: "Site com catálogo",
    texto:
      "Se você quer mostrar seus produtos on-line, com fotos, preços e busca, sem depender só das redes sociais.",
    icone: FiShoppingBag,
  },
  {
    titulo: "Sistema sob medida",
    texto:
      "Se você perde tempo com planilhas, anotações ou tarefas repetidas e quer tudo organizado num lugar só.",
    icone: FiSettings,
  },
];

// Linha de apoio exibida abaixo do título da seção Ferramentas (id "stack")
export const stackIntro =
  "As ferramentas que uso para construir sites rápidos, seguros e fáceis de manter.";

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

// Linha de apoio exibida abaixo do título da seção Projetos
export const projetosIntro =
  "Alguns trabalhos que mostram o que posso criar para o seu negócio: sites que apresentam a sua marca, funcionam bem no celular e ajudam o cliente a chegar até você.";

// `demo` é null quando o projeto não tem versão publicada
export const featuredProjects = [
  {
    slug: "projeto-fashion",
    titulo: "Fashion",
    descricao: "Página de apresentação para uma loja de roupas: mostra as novidades, destaca as promoções e convida o visitante a se cadastrar para receber ofertas. Projeto de exemplo, feito em equipe.",
    tecnologias: ["HTML", "Tailwind CSS"],
    repo: "https://github.com/Brunlps/projeto-fashion",
    demo: "https://projeto-fashion-4mrh.onrender.com",
  },
  {
    slug: "react-fakestore",
    titulo: "React Fakestore",
    descricao: "Vitrine de loja virtual em que o cliente encontra os produtos com facilidade, filtrando por categoria. Ideal para quem quer mostrar um catálogo on-line.",
    tecnologias: ["React", "JavaScript", "Tailwind CSS"],
    repo: "https://github.com/Brunlps/projeto-filtrar-produtos-react",
    demo: "https://projeto-filtrar-produtos-react.onrender.com",
  },
  {
    slug: "meow-cafe",
    titulo: "Meow Café",
    descricao: "Site para um café: apresenta o cardápio com preços, explica como pedir pelo delivery e facilita a reserva. Abre bem no celular, onde a maioria dos clientes procura. Projeto de exemplo.",
    tecnologias: ["HTML", "CSS"],
    repo: "https://github.com/Brunlps/html-css-landpage",
    demo: "https://landing-page-s7iz.onrender.com",
  },
];

// whatsapp guarda só o número (DDI + DDD + número); o link wa.me é montado no componente
export const contact = {
  email: "brunadevs@yahoo.com",
  whatsapp: "5585996337832",
  mensagemWhatsapp:
    "Olá, Bruna! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  titulo: "Vamos conversar",
  texto:
    "Precisa de um site para divulgar o seu negócio ou de um sistema para organizar o dia a dia? Me conte a sua ideia que eu respondo com um orçamento sem compromisso.",
  formspreeId: "mdeellkb",
};
