import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Footer from "./Component/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="main-content">
        <h1>Welcome to MelodyRust 👋</h1>
        <p>Where Code Meets Rhythm</p>
  
      </div>

      <Footer author="Kernel-rb" />
    </div>
  );
}

export default App;
