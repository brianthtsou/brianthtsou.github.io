// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <About />
        <Experience />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
