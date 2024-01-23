import "./App.scss";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Homepage from "./containers/Homepage";
import Projects from "./containers/Projects";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
