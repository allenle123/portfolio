// src/components/Testimonials

import React from "react";
import { TerminalIcon, UsersIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <BriefcaseIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Experience
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-4">
          Dive into a snapshot of my professional journey, highlighting key accomplishments and learning milestones.
        </p>
        <div className="mx-auto p-4 md:w-3/4 w-full">
          {experience.map((exp) => (
            <div key={exp.id} className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <h2 className="text-2xl font-medium text-white mb-3">
                {exp.header}
              </h2>
              <h3 className="text-lg text-gray-500 mb-4">{exp.subheader}</h3>
              <TerminalIcon className="block w-8 text-gray-500 mb-4" />
              {/* Apply text-left class to left-align the quote text */}
              <ul className="leading-relaxed mb-6 list-inside text-left">
                {exp.quote.map((point, index) => (
                  <li key={index} className="mb-2">{point}</li>
                ))}
              </ul>
              <div className="inline-flex items-center">
                <img
                  alt="experience"
                  src={exp.image}
                  className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    {exp.name}
                  </span>
                  <span className="text-gray-500 text-sm uppercase">
                    {exp.company}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
