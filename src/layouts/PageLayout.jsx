import Home from "../pages/Home";
import HeaderMobile from "../components/HeaderMobile";
import DockNav from "../components/DockNav";
import useTheme from "../hooks/useTheme";

// useTheme é chamado só aqui: o tema fica num único lugar e desce por props.
const PageLayout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <HeaderMobile theme={theme} onToggleTheme={toggleTheme} />
      <DockNav activeId="inicio" theme={theme} onToggleTheme={toggleTheme} />
      {/* lg:pb-28 deixa espaço para o dock não cobrir o fim da página */}
      <main className="lg:pb-28">
        <Home />
      </main>
    </>
  );
};

export default PageLayout;
