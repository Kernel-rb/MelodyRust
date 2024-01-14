import React, { useState } from 'react';
import { faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Footer from './Component/Footer/Footer';
import logo from './assets/icon.png';
import "./styles.css";


function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleExploreClick = () => {
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 2500); // Reset the animation
  };
  
  return (

    <div className="container">
      <div className="main-content">
      <img src={logo} alt="logo" className="app-logo" />
      <h1 className={isAnimated ? 'circle-animation' : ''}>
          <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span>
          {' '}<span>t</span><span>o</span>{' '}
          <span>M</span><span>e</span><span>l</span><span>o</span><span>d</span><span>y</span><span>R</span><span>u</span><span>s</span><span>t</span> 👋
        </h1>
        <p>Where Code Meets Rhythm</p>
        <button onClick={handleExploreClick} >Explore</button>
        <button>Learn More</button>
        <p> Join Our Community :</p>
        
        <div className="icons">
        <a href="https://github.com/Kernel-rb" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
          </a>
          <a href="https://instagram.com/kernel.rb" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="icon" icon={faDiscord} />
          </a>
        </div>
        </div>
      <Footer/>
      
    </div>
  );
}

export default App;
