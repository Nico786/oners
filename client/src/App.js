import './App.css';

import { TextProvider } from './contexts/textContext';
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Synopsis from "./components/Synopsis/Synopsis";

function App() {

  return (
    <TextProvider>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <HomePage />
          <Synopsis />
        </main>
      </div>
    </TextProvider>
  );
}

export default App;
