import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-[#2D2D2D] text-[#FDFCF9] py-8 px-6 md:px-12 font-sans overflow-hidden">
      
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/images/JHB.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-semibold mb-6 tracking-tight drop-shadow-lg">
          Who We Are
        </h2>

        <p className="text-md md:text-lg leading-relaxed tracking-wide mb-5 drop-shadow-sm">
          Aspiration Capital is a forward-thinking investment and advisory firm committed to unlocking growth opportunities across South Africa and beyond.
        </p>

        <p className="text-md md:text-lg leading-relaxed tracking-wide mb-5">
          Founded with a vision to empower entrepreneurs, businesses, and investors, we provide strategic capital, expert guidance, and tailored financial solutions.
        </p>

        <p className="text-md md:text-lg leading-relaxed tracking-wide mb-5">
          Our mission is to build lasting value by aligning with ventures that drive innovation, sustainability, and inclusive economic development.
        </p>

        <p className="text-md md:text-lg leading-relaxed tracking-wide text-[#C8B88A] font-medium italic">
          At Aspiration Capital, we don’t just fund ambition — we partner in its success.
        </p>
      </div>
    </section>
  );
};

export default About;