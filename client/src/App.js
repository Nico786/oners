import "./App.css";

import { SectionProvider } from "./contexts/sectionContext";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Synopsis from "./components/Synopsis/Synopsis";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <SectionProvider>
          <Landing />
          <Synopsis />
        </SectionProvider>
      </main>
    </div>
  );
}

export default App;
