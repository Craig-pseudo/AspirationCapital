import React from 'react';

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="bg-[#333333] text-[#C8C8C8] border-b-2 border-[#C8C8C8] py-16 px-6 md:px-12 font-sans max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-medium mb-8 tracking-wide drop-shadow-sm">
        Why Choose Us
      </h2>

      <ul className="max-w-3xl list-disc list-inside space-y-4 text-lg leading-relaxed tracking-wide">
        <li>
          <strong>Experienced Team:</strong> Our team of experts brings years of experience in investment, advisory, and business growth strategies tailored for success.
        </li>
        <li>
          <strong>Strategic Partnerships:</strong> We connect you with a vast network of industry leaders, helping unlock new opportunities and collaborations.
        </li>
        <li>
          <strong>Innovative Solutions:</strong> We prioritize innovation and sustainability to ensure your investments are future-proof and impactful.
        </li>
        <li>
          <strong>Customized Approach:</strong> Each client receives tailored strategies designed specifically to meet their unique goals and challenges.
        </li>
        <li>
          <strong>Commitment to Growth:</strong> We don’t just invest capital — we invest time, resources, and passion to build lasting value.
        </li>
      </ul>
    </section>
  );
};

export default WhyChooseUs;