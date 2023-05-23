import { useState } from "react";

import "./App.css";
import Header from "../src/components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}

export default App;
