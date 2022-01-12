import './App.css';

import { SectionProvider } from './contexts/sectionContext';
import { PersonnagesProvider } from './contexts/personnagesContext';
import { AuteurProvider } from './contexts/auteurContext';

import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Synopsis from "./components/Synopsis/Synopsis";
import Personnages from "./components/Personnages/Personnages";
import Auteurs from "./components/Auteurs/Auteurs";


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
        <PersonnagesProvider>
          <Personnages />
        </PersonnagesProvider>
        <AuteurProvider>
          <Auteurs />
        </AuteurProvider>
      </main>
    </div>
  );
}

export default App;
