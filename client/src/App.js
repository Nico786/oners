import './App.css';

import { TextProvider } from './contexts/textContext';
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Synopsis from "./components/Synopsis/Synopsis";

function App() {

  return (
    <TextProvider>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Landing />
          <Synopsis />
        </main>
      </div>
    </TextProvider>
  );
}

export default App;
