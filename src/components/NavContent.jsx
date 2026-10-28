import { navLinks } from "../data/portfolio";

// Os links vêm de navLinks (portfolio.js): cada `id` aponta para a <section> de mesmo id
// onNavigate fecha o menu ao clicar num link (no desktop não faz nada)
const NavContent = ({ onNavigate }) => (
  <nav className="flex flex-col gap-4">
    {navLinks.map(({ id, rotulo }) => (
      <a key={id} href={`#${id}`} onClick={onNavigate}>
        {rotulo}
      </a>
    ))}
  </nav>
);

export default NavContent;
