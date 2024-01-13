import React from 'react';
import Footer from './Component/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="main-content">
        <h1>
          <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span>
          {' '}<span>t</span><span>o</span>{' '}
          <span>M</span><span>e</span><span>l</span><span>o</span><span>d</span><span>y</span><span>R</span><span>u</span><span>s</span><span>t</span> 👋
        </h1>
        <p>Where Code Meets Rhythm</p>
        <button>I'm Ready</button>
        <button>Don't click Me</button>
      </div>
      <Footer author="Kernel-rb" />
    </div>
  );
}

export default App;
