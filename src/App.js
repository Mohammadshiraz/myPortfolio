import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
