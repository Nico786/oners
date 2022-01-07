import './App.css';

import { SectionProvider } from './contexts/sectionContext';
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Synopsis from "./components/Synopsis/Synopsis";
import ListePersonnages from "./components/Personnages/ListePersonnages";
import { PersonnageProvider } from './contexts/personnageContext';

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
      </main>
    </div>
  );
}

export default App;
