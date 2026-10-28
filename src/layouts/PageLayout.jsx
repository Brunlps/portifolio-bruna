import Home from "../pages/Home";
import HeaderMobile from "../components/HeaderMobile";
import DockNav from "../components/DockNav";
import useTheme from "../hooks/useTheme";
import useActiveSection from "../hooks/useActiveSection";
import { navLinks } from "../data/portfolio";

// Fora do componente de propósito: a referência não muda entre renders,
// então o useEffect do useActiveSection não recria o observer à toa.
const sectionIds = navLinks.map(({ id }) => id);

// useTheme é chamado só aqui: o tema fica num único lugar e desce por props.
const PageLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <HeaderMobile activeId={activeId} theme={theme} onToggleTheme={toggleTheme} />
      <DockNav activeId={activeId} theme={theme} onToggleTheme={toggleTheme} />
      {/* lg:pb-28 deixa espaço para o dock não cobrir o fim da página */}
      <main className="lg:pb-28">
        <Home />
      </main>
    </>
  );
};

export default PageLayout;
