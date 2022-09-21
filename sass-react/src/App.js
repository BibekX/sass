import "./scss/App.scss";

function App() {
  return (
    <section>
      <header>
        <h1>This is a header</h1>
        <button>Click Me!</button>
      </header>
      <article>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          odio magni temporibus suscipit nobis alias ipsa repellat voluptates
          voluptatum earum at, ut explicabo itaque, eaque aliquid hic
          dignissimos maiores laboriosam?
        </p>
        <button>Article button</button>
      </article>
      <div className="header-2">
        <h1>I am another header</h1>
        <h2>I am H2</h2>
        <button>Header button</button>
      </div>
    </section>
  );
}

export default App;
