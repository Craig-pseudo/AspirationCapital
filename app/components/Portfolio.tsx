import React from "react";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Ai Investor",
    description: "A cutting-edge fintech platform to optimize investments.",
    imageUrl: "/images/AC-Logo.jpg",
    link: "https://example.com/project-alpha",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "An innovative mobile app for portfolio tracking.",
    imageUrl: "/images/AC-Logo.jpg",
    link: "https://example.com/project-beta",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "AI-driven analytics for better market insights.",
    imageUrl: "/images/AC-Logo.jpg",
    link: "https://example.com/project-gamma",
  },
  // Add more items here...
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="bg-[#333333] text-[#C8C8C8] py-16 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map(({ id, title, description, imageUrl, link }) => (
            <div
              key={id}
              className="bg-[#444444] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-[#C8C8C8] mb-4">{description}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#C8C8C8] border border-[#C8C8C8] rounded px-4 py-2 hover:bg-[#C8C8C8] hover:text-[#333333] transition"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;