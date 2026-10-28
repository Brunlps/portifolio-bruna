import { navLinks } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

// Menu flutuante do desktop (a partir de lg).
// activeId é o id da seção ativa: esse link ganha o destaque lime.
const DockNav = ({ activeId, theme, onToggleTheme }) => (
  <nav
    aria-label="Navegação principal"
    className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-zinc-200 bg-white/80 p-2 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80 lg:flex"
  >
    {navLinks.map(({ id, rotulo, icone: Icone }) => {
      const ativo = id === activeId;
      return (
        <a
          key={id}
          href={`#${id}`}
          aria-current={ativo ? "location" : undefined}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:focus-visible:outline-lime-400 ${
            ativo
              ? "bg-lime-400 text-zinc-950"
              : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          }`}
        >
          <Icone aria-hidden="true" size={18} />
          {rotulo}
        </a>
      );
    })}
    <ThemeToggle
      theme={theme}
      onToggle={onToggleTheme}
      className="rounded-full p-2 text-zinc-700 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:focus-visible:outline-lime-400"
    />
  </nav>
);

export default DockNav;
