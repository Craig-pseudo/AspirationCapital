'use client'
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate subscription success
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#333333] text-[#C8C8C8] border-t-2 border-[#C8C8C8] py-12 px-6 md:px-12 font-sans max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      {/* Left: Logo and tagline */}
      <div className="md:w-1/3 flex flex-col space-y-4">
        <h3 className="text-xl font-semibold">Aspiration Capital</h3>
        <p className="text-sm max-w-xs">
          Empowering innovation by investing in visionary startups and
          sustainable futures.
        </p>

        <div className="flex space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#E0E0E0] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            aria-label="Email"
            className="hover:text-[#E0E0E0] transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#E0E0E0] transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Middle: Quick Links */}
      <div className="md:w-1/3 flex flex-col space-y-4">
        <h4 className="text-lg font-semibold">Quick Links</h4>
        <nav className="flex flex-col space-y-2 text-sm">
          <a href="#about" className="hover:underline hover:text-[#E0E0E0]">
            About Us
          </a>
          <a
            href="#investment-focus"
            className="hover:underline hover:text-[#E0E0E0]"
          >
            Investment Focus
          </a>
          <a href="#portfolio" className="hover:underline hover:text-[#E0E0E0]">
            Portfolio
          </a>
          <a href="#team" className="hover:underline hover:text-[#E0E0E0]">
            Team
          </a>
          <a href="#contact" className="hover:underline hover:text-[#E0E0E0]">
            Contact
          </a>
        </nav>
      </div>

      {/* Right: Newsletter Signup */}
      <div className="md:w-1/3">
        <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
        {subscribed ? (
          <p className="text-green-400">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded bg-[#444444] text-[#C8C8C8] border border-[#C8C8C8] focus:outline-none focus:ring-2 focus:ring-[#C8C8C8]"
            />
            <button
              type="submit"
              className="bg-[#C8C8C8] text-[#333333] py-2 rounded font-semibold hover:bg-[#b0b0b0] transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {/* Bottom full width: copyright & legal */}
      <div className="mt-12 pt-6 w-full flex flex-col md:flex-row justify-between text-xs text-[#999999]">
  <p className="mb-4 md:mb-0">
    &copy; {new Date().getFullYear()} Aspiration Capital. All rights
    reserved.
  </p>
  <div className="flex space-x-6">
    <a href="/privacy" className="hover:underline hover:text-[#E0E0E0]">
      Privacy Policy
    </a>
    <a href="/terms" className="hover:underline hover:text-[#E0E0E0]">
      Terms of Service
    </a>
  </div>
</div>
    </footer>
  );
};

export default Footer;