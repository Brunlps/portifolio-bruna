import { useState } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { contact, profile } from "../data/portfolio";

const CAMPOS_VAZIOS = { nome: "", email: "", assunto: "", mensagem: "" };

// Classes compartilhadas pelos campos do formulário (nos dois temas)
const classeCampo =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:outline-lime-400";

// Link do WhatsApp: a mensagem precisa ser codificada para caber na URL (espaços, acentos...)
const linkWhatsapp = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  contact.mensagemWhatsapp,
)}`;

// Enquanto o id for "TODO: ...", o formulário não tem para onde enviar
const formspreeConfigurado = !contact.formspreeId.startsWith("TODO");

const Contact = () => {
  // useState guarda o que foi digitado; ao mudar, o componente renderiza de novo
  const [valores, setValores] = useState(CAMPOS_VAZIOS);
  // status: "ocioso" | "enviando" | "sucesso" | "erro"
  const [status, setStatus] = useState("ocioso");

  // Atualiza só o campo que mudou (o `name` do input é a chave em `valores`)
  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setValores((anterior) => ({ ...anterior, [name]: value }));
  };

  const handleSubmit = async (evento) => {
    // Impede o navegador de recarregar a página no envio do formulário
    evento.preventDefault();
    if (!formspreeConfigurado) return;

    setStatus("enviando");
    try {
      // POST em JSON; o header Accept faz o Formspree responder JSON em vez de redirecionar
      await axios.post(`https://formspree.io/f/${contact.formspreeId}`, valores, {
        headers: { Accept: "application/json" },
      });
      // Só chega aqui se o Formspree respondeu com sucesso: agora podemos limpar
      setValores(CAMPOS_VAZIOS);
      setStatus("sucesso");
    } catch {
      // Em erro os campos continuam preenchidos para a pessoa tentar de novo
      setStatus("erro");
    }
  };

  const enviando = status === "enviando";

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col items-start gap-6">
        <h2 className="font-display text-5xl sm:text-6xl">{contact.titulo}</h2>
        <p className="text-zinc-600 dark:text-zinc-400">{contact.texto}</p>

        <ul className="flex flex-col gap-3 text-zinc-700 dark:text-zinc-300">
          <li className="flex items-center gap-3">
            <FiMail aria-hidden="true" size={20} />
            <span>{contact.email}</span>
          </li>
          <li className="flex items-center gap-3">
            <FiMapPin aria-hidden="true" size={20} />
            <span>{profile.localizacao}</span>
          </li>
        </ul>

        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-lime-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-lime-800 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:bg-lime-400 dark:text-zinc-950 dark:hover:bg-lime-300 dark:focus-visible:outline-lime-400"
        >
          <FaWhatsapp aria-hidden="true" size={20} />
          Chamar no WhatsApp
        </a>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="contato-nome" className="text-sm font-medium">
            Nome
          </label>
          <input
            id="contato-nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            value={valores.nome}
            onChange={handleChange}
            className={classeCampo}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contato-email" className="text-sm font-medium">
            E-mail
          </label>
          <input
            id="contato-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={valores.email}
            onChange={handleChange}
            className={classeCampo}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contato-assunto" className="text-sm font-medium">
            Assunto
          </label>
          <input
            id="contato-assunto"
            name="assunto"
            type="text"
            required
            value={valores.assunto}
            onChange={handleChange}
            className={classeCampo}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contato-mensagem" className="text-sm font-medium">
            Mensagem
          </label>
          <textarea
            id="contato-mensagem"
            name="mensagem"
            rows={5}
            required
            value={valores.mensagem}
            onChange={handleChange}
            className={classeCampo}
          />
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="inline-flex items-center justify-center rounded-full bg-lime-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-lime-800 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:bg-lime-400 dark:text-zinc-950 dark:hover:bg-lime-300 dark:focus-visible:outline-lime-400"
        >
          {enviando ? "Enviando..." : "Enviar mensagem"}
        </button>

        {/* aria-live: leitores de tela anunciam o texto quando ele muda */}
        <div aria-live="polite" className="min-h-6 text-sm">
          {!formspreeConfigurado && (
            <p className="text-amber-700 dark:text-amber-400">
              O envio do formulário ainda não foi configurado. Use o WhatsApp ou o
              e-mail por enquanto.
            </p>
          )}
          {status === "sucesso" && (
            <p className="text-lime-700 dark:text-lime-400">
              Mensagem enviada! Responderei em breve.
            </p>
          )}
          {status === "erro" && (
            <p className="text-red-700 dark:text-red-400">
              Não foi possível enviar a mensagem. Tente de novo ou use o WhatsApp.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
