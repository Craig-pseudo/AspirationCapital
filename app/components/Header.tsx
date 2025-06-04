import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#333333] border-b-2 border-[#C8C8C8] w-full px-4 py-4
      flex flex-col items-center
      lg:flex-row lg:items-center lg:justify-between
      gap-4
    ">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-4">
        <img src="/images/AC_Logo.png" alt="AC Logo" className="w-28 h-auto" />
        <div className="text-[#C8C8C8] text-2xl font-semibold whitespace-nowrap">
          Aspiration Capital
        </div>
      </div>

      {/* Middle: Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 max-w-full
        lg:max-w-none
      ">
        <a href="#about" className="hover:text-[#E0E0E0] transition-colors duration-200 whitespace-nowrap">
          About
        </a>
        <a href="#investment-focus" className="hover:text-[#E0E0E0] transition-colors duration-200 whitespace-nowrap">
          Focus
        </a>
        <a href="#portfolio" className="hover:text-[#E0E0E0] transition-colors duration-200 whitespace-nowrap">
          Portfolio
        </a>
        <a href="#team" className="hover:text-[#E0E0E0] transition-colors duration-200 whitespace-nowrap">
          Team
        </a>
        <a href="#why-choose-us" className="hover:text-[#E0E0E0] transition-colors duration-200 whitespace-nowrap">
          Why Choose Us
        </a>
      </nav>

      {/* Right: Contact Button */}
      <a
        href="#contact"
        className="h-8 px-4 rounded-md bg-[#C8C8C8] text-[#333333]
          flex items-center justify-center whitespace-nowrap
          hover:bg-[#b0b0b0] transition
        "
      >
        Contact Us
      </a>
    </header>
  );
};

export default Header;