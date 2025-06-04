'use client';
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#333333] text-[#C8C8C8] px-4 md:px-8 py-8 font-sans w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        {/* Left: Branding */}
        <div className="md:w-1/3 space-y-3">
          <h3 className="text-xl font-semibold">Aspiration Capital</h3>
          <p className="text-sm leading-relaxed">
            Empowering innovation by investing in visionary startups and sustainable futures.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-[#E0E0E0] text-sm">
              LinkedIn
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-[#E0E0E0] text-sm">
              Email
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#E0E0E0] text-sm">
              GitHub
            </a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="md:w-1/3 space-y-3">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#about" className="hover:underline hover:text-[#E0E0E0]">About Us</a>
            <a href="#investment-focus" className="hover:underline hover:text-[#E0E0E0]">Investment Focus</a>
            <a href="#portfolio" className="hover:underline hover:text-[#E0E0E0]">Portfolio</a>
            <a href="#team" className="hover:underline hover:text-[#E0E0E0]">Team</a>
            <a href="#contact" className="hover:underline hover:text-[#E0E0E0]">Contact</a>
          </nav>
        </div>

        {/* Right: Newsletter */}
        <div className="md:w-1/3 space-y-3">
          <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
          {subscribed ? (
            <p className="text-green-400 text-sm">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 rounded bg-[#444444] text-sm text-[#C8C8C8] border border-[#C8C8C8] focus:outline-none focus:ring-2 focus:ring-[#C8C8C8]"
              />
              <button
                type="submit"
                className="bg-[#C8C8C8] text-[#333333] py-2 rounded font-semibold text-sm hover:bg-[#b0b0b0] transition"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-8 pt-6 border-t border-[#444444] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#999999]">
        <p>&copy; {new Date().getFullYear()} Aspiration Capital. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:underline hover:text-[#E0E0E0]">Privacy Policy</a>
          <a href="/terms" className="hover:underline hover:text-[#E0E0E0]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;