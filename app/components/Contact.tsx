"use client";

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
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <section
      id="contact"
      className="bg-[#F5F3EF] text-[#2D2D2D] border-b-2 border-[#E6E6E6] py-16 px-6 md:px-12 font-sans"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Contact Us
          </h2>

          {submitted && (
            <div className="mb-6 p-4 rounded bg-[#7b6e57] bg-opacity-20 text-[#2D2D2D] font-semibold">
              Thanks for reaching out! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block mb-2 font-semibold text-[#2D2D2D]"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className={`w-full rounded border px-4 py-3 bg-[#FDFCF9] border-[#EDEAE5] text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#C8B88A] transition ${
                    errors[field as keyof FormData] ? "border-red-500" : ""
                  }`}
                />
                {errors[field as keyof FormData] && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors[field as keyof FormData]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-[#2D2D2D]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded border px-4 py-3 bg-[#FDFCF9] border-[#EDEAE5] text-[#2D2D2D] resize-none focus:outline-none focus:ring-2 focus:ring-[#C8B88A] transition ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded bg-[#7b6e57] text-[#FDFCF9] font-semibold hover:bg-[#C8B88A] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="pt-6 md:pt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Connect with us
          </h3>
          <ul className="space-y-4 text-[#7b6e57] text-lg text-center md:text-left">
            <li>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C8B88A] transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:youremail@example.com"
                className="hover:text-[#C8B88A] transition-colors"
              >
                Email Us
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C8B88A] transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;