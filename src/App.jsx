import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer";
import About from "../components/About";
import Interests from "../components/Interests";
import Header from "../components/Header";
import "./App.css";

function App() {
  return (
    <div className= "container">
     < Header/>
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
