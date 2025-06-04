import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#333333] flex justify-between items-center w-full border-b-2 border-[#C8C8C8]'>
        <div className='flex justify-between items-center'>
            <div>
                <img src="/images/AC_Logo.png" alt="AC Logo" className="w-32 h-auto" />
            </div>
            <div className='text-[#C8C8C8] flex justify-center text-3xl'>Aspiration Capital</div>
        </div>
        <div>
          
          <nav className="flex space-x-6 text-[#C8C8C8] font-medium">
      <a href="#about" className="hover:text-[#E0E0E0] transition-colors duration-200">
        About
      </a>
      <a href="#investment-focus" className="hover:text-[#E0E0E0] transition-colors duration-200">
        Focus
      </a>
      <a href="#portfolio" className="hover:text-[#E0E0E0] transition-colors duration-200">
        Portfolio
      </a>
      <a href="#team" className="hover:text-[#E0E0E0] transition-colors duration-200">
        Team
      </a>
      <a href="#why-choose-us" className="hover:text-[#E0E0E0] transition-colors duration-200">
        Why Choose Us
      </a>
      </nav>

        </div>
        <a
         href="#contact"
         className="h-8 px-4 rounded-md bg-[#C8C8C8] text-[#333333] flex items-center justify-center hover:bg-[#b0b0b0] transition"
         >
         Contact Us
      </a>   
</div>
  )
}

export default Header