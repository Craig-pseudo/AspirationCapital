import React from 'react';

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative bg-[#2D2D2D] text-[#FDFCF9] py-10 px-6 md:px-12 font-sans w-full overflow-hidden"
    >
      
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/CapeTown.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-semibold mb-10 tracking-wide">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="space-y-6 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold mb-1 text-[#C8B88A]">Experienced Team</h3>
              <p>
                Our experts bring decades of success in venture capital, strategic advisory, and scaling enterprises globally.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-[#C8B88A]">Strategic Partnerships</h3>
              <p>
                We unlock doors to elite networks, providing access to high-level decision-makers and market-shaping alliances.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-[#C8B88A]">Innovative Solutions</h3>
              <p>
                Future-focused investments and sustainable strategies built to evolve with dynamic markets.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold mb-1 text-[#C8B88A]">Customized Approach</h3>
              <p>
                We tailor strategies precisely to each client’s ambitions, risk profile, and market environment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-[#C8B88A]">Commitment to Growth</h3>
              <p>
                Beyond capital — we invest time, vision, and care to foster long-term value and leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;