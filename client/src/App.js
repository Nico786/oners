import './App.css';

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Synopsis from "./components/Synopsis/Synopsis";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <HomePage />
        <Synopsis />
      </main>
    </div>
  );
}

export default App;
