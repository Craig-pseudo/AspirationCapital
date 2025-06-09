import React from "react";

const Services: React.FC = () => {
  return (
    <section
      id="service"
      className="bg-[#FDFCF9] text-[#2D2D2D] py-12 px-6 md:px-12 font-sans w-full"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-semibold mb-10 tracking-wide">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left text-lg leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#7b6e57]">
              Investment Services
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Venture capital</li>
              <li>Private equity</li>
              <li>Portfolio management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#7b6e57]">
              Consulting Services
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Business strategy</li>
              <li>Financial planning</li>
              <li>Risk assessment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;