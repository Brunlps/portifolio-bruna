import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ theme, onToggle, className = "" }) => (
  <button
    onClick={onToggle}
    aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
    className={className}
  >
    {theme === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
  </button>
);

export default ThemeToggle;
