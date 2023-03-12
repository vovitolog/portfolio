import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
    </div>
  );
}

export default App;
