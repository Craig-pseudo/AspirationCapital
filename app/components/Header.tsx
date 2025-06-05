import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#2D2D2D] border-b-2 border-[#E6E6E6] w-full px-4 md:px-8 py-2 md:py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
        
        <div className="flex items-center gap-x-4 mb-2 md:mb-0">
          <img src="/images/AC_Logo.png" alt="AC Logo" className="w-24 md:w-32 h-auto" />
          <span className="text-[#FDFCF9] text-xl md:text-2xl font-semibold">Aspiration Capital</span>
        </div>

        
        <nav className="flex flex-wrap justify-center gap-x-4 text-sm md:text-base text-[#FDFCF9] font-medium mb-2 md:mb-0">
          <a href="#about" className="hover:text-[#C8B88A] transition">About</a>
          <a href="#investment-focus" className="hover:text-[#C8B88A] transition">Focus</a>
          <a href="#portfolio" className="hover:text-[#C8B88A] transition">Portfolio</a>
          <a href="#team" className="hover:text-[#C8B88A] transition">Team</a>
          <a href="#why-choose-us" className="hover:text-[#C8B88A] transition">Why Choose Us</a>
        </nav>

        
        <a
          href="#contact"
          className="h-8 w-28 rounded-md flex justify-center items-center text-[#2D2D2D] bg-[#7b6e57] hover:bg-[#C8B88A] transition-colors text-sm font-medium"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;