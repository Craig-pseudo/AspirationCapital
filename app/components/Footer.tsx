import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-[#C8C8C8] border-t-2 border-[#C8C8C8] py-6 px-6 md:px-12 font-sans max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Aspiration Capital. All rights reserved.</p>

      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E0E0E0] transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-[#E0E0E0] transition-colors duration-200"
        >
          Email
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E0E0E0] transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;