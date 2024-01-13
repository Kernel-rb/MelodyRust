import React from 'react';

interface FooterProps {
  author: string;
}

const Footer: React.FC<FooterProps> = ({ author }) => {


  return (
    <footer>
      Made with ❤️ by {author}. Feel free to contribute to the <a href="https://github.com/Kernel-rb" style={{ color: 'cyan' }}> project</a>.
    </footer>
  );
};

export default Footer;
