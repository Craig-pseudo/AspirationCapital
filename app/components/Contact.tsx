'use client'
import React, { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<FormData>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
   <div 
   id="contact"
   className="flex flex-col md:flex-row border-b border-[#C8C8C8] bg-[#333333] text-[#C8C8C8] p-6 md:p-8">
      {/* Left: Contact Form */}
      <div className="md:w-1/2 max-w-md">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        {submitted && (
          <div className="mb-4 p-3 rounded text-green-400 bg-green-800 bg-opacity-20">
            Thanks for reaching out! We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label className="block mb-2 font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-transparent text-[#C8C8C8] ${
              errors.name ? "border-red-500" : "border-gray-500"
            } focus:outline-none focus:ring-2 focus:ring-gray-400`}
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}

          <label className="block mt-4 mb-2 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-transparent text-[#C8C8C8] ${
              errors.email ? "border-red-500" : "border-gray-500"
            } focus:outline-none focus:ring-2 focus:ring-gray-400`}
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}

          <label className="block mt-4 mb-2 font-medium" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-2 border rounded bg-transparent text-[#C8C8C8] ${
              errors.subject ? "border-red-500" : "border-gray-500"
            } focus:outline-none focus:ring-2 focus:ring-gray-400`}
          />
          {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}

          <label className="block mt-4 mb-2 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-2 border rounded resize-none bg-transparent text-[#C8C8C8] ${
              errors.message ? "border-red-500" : "border-gray-500"
            } focus:outline-none focus:ring-2 focus:ring-gray-400`}
          ></textarea>
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}

          <button
            type="submit"
            className="mt-6 w-full py-2 rounded transition bg-[#7b6e57] text-[#333333] hover:bg-[#C8B88A]"
          >
            Send Message
          </button>
        </form>
      </div>

      
      <div className="md:w-1/2 mt-12 md:mt-0 md:pl-16 flex flex-col items-start ">
        <h3 className="text-2xl font-semibold mb-4">Connect with us</h3>
        <ul className="space-y-2 text-[#C8C8C8]">
          <li>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:youremail@example.com"
              className="hover:underline hover:text-white"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;