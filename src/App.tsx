// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
