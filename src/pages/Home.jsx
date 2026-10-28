import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stack from "../components/Stack";
import FeaturedProjects from "../components/FeaturedProjects";
import GithubRepos from "../components/GithubRepos";
import Contact from "../components/Contact";

// Cada <section> tem o id usado pelos links do menu (href="#id").
// scroll-mt-24 deixa um respiro no topo para o header não cobrir o título.
const Home = () => (
  <>
    <Sidebar />
    <section id="inicio" className="scroll-mt-24">
      <Hero />
    </section>
    <section id="sobre" className="scroll-mt-24">
      <About />
    </section>
    <section id="stack" className="scroll-mt-24">
      <Stack />
    </section>
    <section id="projetos" className="scroll-mt-24">
      <FeaturedProjects />
      <GithubRepos />
    </section>
    <section id="contato" className="scroll-mt-24">
      <Contact />
    </section>
  </>
);

export default Home;
