import React from 'react';

import './Footer.css';

interface FooterProps {
  author: string;
}

const Footer: React.FC<FooterProps> = ({ author }) => {
  
  return (
    <footer style={{color : "#1BFD9C"}}>
      Made with ❤️ by {author}. Feel free to contribute to the <a 
      href="https://github.com/Kernel-rb" 
      target="_blank"
      style={{ color: "white" }}
      > 
      project
      </a>.

    </footer>
  );
};

export default Footer;
