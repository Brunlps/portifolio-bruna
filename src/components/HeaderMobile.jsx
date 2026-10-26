import { FiMenu } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const HeaderMobile = ({ onOpen, theme, onToggleTheme }) => (
  <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center pt-4 justify-between bg-white px-4 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-200 lg:hidden">
    <span>Bruna Lopes</span>
    <div className="flex items-center gap-4">
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      <button onClick={onOpen} aria-label="Abrir menu">
        <FiMenu size={24} />
      </button>
    </div>
  </header>
);

export default HeaderMobile;
