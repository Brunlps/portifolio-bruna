const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

// onNavigate fecha o menu ao clicar num link (no desktop não faz nada)
const NavContent = ({ onNavigate }) => (
  <nav className="flex flex-col gap-4">
    {links.map(({ href, label }) => (
      <a key={href} href={href} onClick={onNavigate}>
        {label}
      </a>
    ))}
  </nav>
);

export default NavContent;
