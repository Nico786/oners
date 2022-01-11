import './App.css';

import { SectionProvider } from './contexts/sectionContext';
import { PersonnageProvider } from './contexts/personnageContext';
import { AuteurProvider } from './contexts/auteurContext';

import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Synopsis from "./components/Synopsis/Synopsis";
import ListePersonnages from "./components/Personnages/ListePersonnages";
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
        <PersonnageProvider>
          <ListePersonnages />
        </PersonnageProvider>
        <AuteurProvider>
          <Auteurs />
        </AuteurProvider>
      </main>
    </div>
  );
}

export default App;
