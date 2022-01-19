import './App.css';

import { SectionsProvider } from './contexts/sectionsContext';
import { PersonnagesProvider } from './contexts/personnagesContext';
import { AuteursProvider } from './contexts/auteursContext';

import NavBar from './components/NavBar/NavBar';
import Landing from "./components/Landing/Landing";
import Synopsis from "./components/Synopsis/Synopsis";
import Personnages from "./components/Personnages/Personnages";
import Auteurs from "./components/Auteurs/Auteurs";
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <header>
       <NavBar/>
      </header>
      <main>
        <SectionsProvider>
          <Landing />
          <Synopsis />
        </SectionsProvider>
        <PersonnagesProvider>
          <Personnages />
        </PersonnagesProvider>
        <AuteursProvider>
          <Auteurs />
        </AuteursProvider>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
