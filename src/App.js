import carmen from "./assets/carmen.svg";
import List from "./List";
import "./sass/App.css";

function App() {
  return (
    <div>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" />
        <h3>.react | sass.</h3>
      </header>
      <main>
        <List />
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
