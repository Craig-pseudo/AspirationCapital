import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#333333] border-b-2 border-[#C8C8C8] w-full px-4 md:px-8 py-2 md:py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-x-4 mb-2 md:mb-0">
          <img src="/images/AC_Logo.png" alt="AC Logo" className="w-24 md:w-32 h-auto" />
          <span className="text-[#C8C8C8] text-xl md:text-2xl font-semibold">Aspiration Capital</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-4 text-sm md:text-base text-[#C8C8C8] font-medium mb-2 md:mb-0">
          <a href="#about" className="hover:text-[#E0E0E0] transition">About</a>
          <a href="#investment-focus" className="hover:text-[#E0E0E0] transition">Focus</a>
          <a href="#portfolio" className="hover:text-[#E0E0E0] transition">Portfolio</a>
          <a href="#team" className="hover:text-[#E0E0E0] transition">Team</a>
          <a href="#why-choose-us" className="hover:text-[#E0E0E0] transition">Why Choose Us</a>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="h-8 w-28 rounded-md flex justify-center items-center text-[#333333] bg-[#C8C8C8] hover:bg-[#b0b0b0] transition-colors text-sm font-medium"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;