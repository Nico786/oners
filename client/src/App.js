import HomePage from "./components/HomePage/HomePage";
import './App.css';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header>
      <NavBar/>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
