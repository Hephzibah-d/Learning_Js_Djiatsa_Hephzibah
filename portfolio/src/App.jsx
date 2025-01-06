import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
            <Routes>
              <Route path="/" element={<Hero/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;