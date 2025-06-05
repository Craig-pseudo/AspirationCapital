import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#F5F3EF] border-b border-[#E6E6E6] w-full px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo and Name */}
        <div className="flex items-center gap-x-4">
          <img
            src="/images/AC_Logo.png"
            alt="Aspiration Capital Logo"
            className="w-24 md:w-28 h-auto"
          />
          <span className="text-[#2D2D2D] text-2xl md:text-3xl font-semibold tracking-tight drop-shadow">
            Aspiration Capital
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-[#2D2D2D] font-medium">
          <a href="#about" className="hover:text-[#7b6e57] transition-colors duration-300">
            About
          </a>
          <a href="#investment-focus" className="hover:text-[#7b6e57] transition-colors duration-300">
            Focus
          </a>
          <a href="#portfolio" className="hover:text-[#7b6e57] transition-colors duration-300">
            Portfolio
          </a>
          <a href="#why-choose-us" className="hover:text-[#7b6e57] transition-colors duration-300">
            Why Us
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="h-9 px-5 rounded-md flex justify-center items-center text-[#2D2D2D] bg-[#7b6e57] hover:bg-[#C8B88A] transition-colors duration-300 text-sm font-semibold tracking-wide shadow-sm"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;