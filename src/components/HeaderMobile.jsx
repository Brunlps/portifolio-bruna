import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavContent from "./NavContent";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/portfolio";

const HeaderMobile = ({ theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Com o menu aberto: ESC fecha e o scroll da página fica travado.
  // O return limpa tudo quando o menu fecha (ou o componente sai da tela).
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between bg-zinc-50 px-4 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-200 lg:hidden">
        <span>{profile.nome}</span>
        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </header>

      {/* Fundo escuro: clicar fora fecha o menu */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity motion-reduce:transition-none lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer: desliza da esquerda. `inert` tira os links do foco enquanto fechado */}
      <aside
        id="menu-mobile"
        inert={!open}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-zinc-50 p-6 text-zinc-900 transition-transform duration-300 motion-reduce:transition-none dark:bg-zinc-900 dark:text-zinc-50 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={close} aria-label="Fechar menu" className="mb-8">
          <FiX size={24} />
        </button>
        <NavContent onNavigate={close} />
      </aside>
    </>
  );
};

export default HeaderMobile;
