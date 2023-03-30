import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
    </div>
  );
}

export default App;
