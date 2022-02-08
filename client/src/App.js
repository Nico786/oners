import React from 'react';
import { Route } from 'react-router-dom';
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
import Footer from "./components/Footer/Footer";
import Admin from './components/Admin/Admin';


function App() {

  return (
    <>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/">
        <header>
          <NavBar />
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
      </Route> 
    </>
  );
}

export default App;
