// src/components/Contact.js

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-col items-center">
        <h2 className="text-white sm:text-4xl text-3xl mb-4 font-medium title-font">
          My Links 
        </h2>
        <div className="flex items-center mb-4">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            <img
              src="/docs/linkedin_icon.png" // Adjust the path based on your project structure
              alt="LinkedIn"
              className="w-8 h-8" // Increased width and height
            />
          </a>
          <a
            href="https://github.com/allenle123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            <img
              src="/github_icon.png" // Adjust the path based on your project structure
              alt="LinkedIn"
              className="w-8 h-8" // Increased width and height
            />
          </a>
        </div>
      </div>
    </section>
  );
}
