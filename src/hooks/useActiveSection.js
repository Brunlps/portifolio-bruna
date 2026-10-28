import { useEffect, useState } from "react";

// Recebe a lista de ids das seções e devolve o id da que está no meio da tela.
// Importante: `ids` precisa ter a mesma referência entre renders (defina fora do
// componente), senão o useEffect abaixo rodaria de novo a cada render.
const useActiveSection = (ids) => {
  // useState guarda um valor que, ao mudar, faz o componente renderizar de novo.
  // Começa na primeira seção; setActiveId troca o valor depois.
  const [activeId, setActiveId] = useState(ids[0]);

  // useEffect roda depois que a tela foi desenhada (aí as <section> já existem no DOM).
  // Ele só roda de novo se `ids` mudar.
  useEffect(() => {
    // O observer avisa quando um elemento entra ou sai da "área de observação".
    // rootMargin encolhe essa área da tela: 45% do topo e 50% de baixo são cortados,
    // sobrando uma faixa fina no centro. A seção que cruza essa faixa é a ativa.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // isIntersecting = true quando a seção entrou na faixa.
          // Quando só sai, não fazemos nada: o último id continua ativo até outra entrar.
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    // Pede ao observer para vigiar cada seção (ids sem elemento são ignorados).
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Cleanup: o React chama esta função antes de rodar o efeito de novo e quando o
    // componente sai da tela. disconnect() para de vigiar tudo e evita vazamento.
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};

export default useActiveSection;
