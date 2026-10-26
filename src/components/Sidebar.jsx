import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import HeaderMobile from "./HeaderMobile";
import NavContent from "./NavContent";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const close = () => setOpen(false);

  // Fecha com ESC e trava o scroll da página enquanto o menu está aberto
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
      <HeaderMobile
        onOpen={() => setOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Fundo escuro: clicar fora fecha */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity 
          lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menu lateral: no mobile desliza, no desktop fica fixo */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 p-6 text-white transition-transform dark:bg-zinc-900 duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={close} aria-label="Fechar menu" className="mb-8 lg:hidden">
          <FiX size={24} />
        </button>
        <NavContent onNavigate={close} />
        <ThemeToggle
          theme={theme}
          onToggle={toggleTheme}
          className="mt-8 hidden lg:block"
        />
      </aside>
    </>
  );
};

export default Sidebar;
