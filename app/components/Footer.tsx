'use client';

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);

    // Optional: check if email already exists
    const { data: existing, error: checkError } = await supabase
      .from("newsletter_subscribers")
      .select("email")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // Ignore "No rows" error code
      setError("An error occurred. Please try again.");
      setLoading(false);
      return;
    }
    
    if (existing) {
      setError("This email is already subscribed.");
      setLoading(false);
      return;
    }

    // Insert email
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email }]);

    setLoading(false);

    if (error) {
      setError("Subscription failed. Please try again.");
      console.error(error);
    } else {
      setSubscribed(true);
      setEmail("");
      setError(null);
    }
  };

  return (
    <footer id="newsletter" className="relative bg-[#2D2D2D] text-[#FDFCF9] px-6 md:px-12 py-10 font-sans border-t border-[#3C3C3C]">
      
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold drop-shadow-lg">Aspiration Capital</h3>
          <p className="text-sm leading-relaxed text-[#D0D0D0]">
            Empowering innovation by investing in visionary startups and sustainable futures.
          </p>
          <div className="flex space-x-4 pt-1 text-sm">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#C8B88A]">
              LinkedIn
            </a>
            <a href="mailto:youremail@example.com" className="hover:underline hover:text-[#C8B88A]">
              Email
            </a>
          </div>
        </div>

        
        <div className="space-y-3">
          <h4 className="text-lg font-semibold drop-shadow">Quick Links</h4>
          <nav className="flex flex-col gap-1.5 text-sm text-[#D0D0D0]">
            <a href="#about" className="hover:underline hover:text-[#C8B88A]">About Us</a>
            <a href="#service" className="hover:underline hover:text-[#C8B88A]">Our Services</a>
            <a href="#contact" className="hover:underline hover:text-[#C8B88A]">Contact</a>
          </nav>
        </div>

        
        <div className="space-y-3">
          <h4 className="text-lg font-semibold drop-shadow">Subscribe to Our Newsletter</h4>
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
                className="p-2 rounded bg-transparent border border-[#C8C8C8] text-sm text-[#FDFCF9] focus:outline-none focus:ring-2 focus:ring-[#7b6e57]"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className={`py-2 rounded font-semibold text-sm transition-colors ${
                  loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#7b6e57] text-[#2D2D2D] hover:bg-[#C8B88A]"
                }`}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
              {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
            </form>
          )}
        </div>
      </div>

      
      <div className="relative z-10 mt-8 pt-4 border-t border-[#3C3C3C] flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#A0A0A0]">
        <p>&copy; {new Date().getFullYear()} Aspiration Capital. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:underline hover:text-[#C8B88A]">Privacy Policy</a>
          <a href="/terms" className="hover:underline hover:text-[#C8B88A]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;