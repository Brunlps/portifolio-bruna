import { stack, stackIntro } from "../data/portfolio";

// Para incluir uma tecnologia nova, basta editar `stack` no portfolio.js
const Stack = () => (
  <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12">
    <div className="flex flex-col gap-2">
      <h2 className="font-display text-5xl sm:text-6xl">Stack</h2>
      <p className="text-zinc-600 dark:text-zinc-400">{stackIntro}</p>
    </div>

    {/* 2 colunas no mobile, 3 a partir de sm, 4 a partir de lg */}
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {/* key = nome: identifica cada item para o React (o nome é único na lista) */}
      {stack.map(({ nome, icone: Icone }) => (
        <li
          key={nome}
          className="flex items-center gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-lime-700 motion-reduce:transition-none dark:border-zinc-800 dark:hover:border-lime-400"
        >
          <Icone
            aria-hidden="true"
            size={28}
            className="shrink-0 text-lime-700 dark:text-lime-400"
          />
          <span className="font-medium">{nome}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Stack;
