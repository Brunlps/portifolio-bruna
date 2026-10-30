import { navLinks } from "../data/portfolio";

// Os links vêm de navLinks (portfolio.js): cada `id` aponta para a <section> de mesmo id
// activeId é a seção visível: o link dela ganha destaque e aria-current
// onNavigate fecha o menu ao clicar num link
const NavContent = ({ activeId, onNavigate }) => (
  <nav className="flex flex-col gap-4">
    {navLinks.map(({ id, rotulo }) => {
      const ativo = id === activeId;
      return (
        <a
          key={id}
          href={`#${id}`}
          onClick={onNavigate}
          aria-current={ativo ? "location" : undefined}
          className={
            ativo ? "font-semibold text-lime-700 dark:text-lime-400" : undefined
          }
        >
          {rotulo}
        </a>
      );
    })}
  </nav>
);

export default NavContent;
