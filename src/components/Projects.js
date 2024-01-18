// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Explore some of the projects I've worked on!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Center Project */}
          <div className="p-4 md:w-full w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <CodeIcon className="block w-8 text-gray-500 mb-4 mx-auto" />
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {projects[1].subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {projects[1].title}
              </h1>
              <p className="leading-relaxed">{projects[1].description}</p>
            </div>
          </div>

          {/* Left Project */}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <CodeIcon className="block w-8 text-gray-500 mb-4" />
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {projects[0].subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {projects[0].title}
              </h1>
              <p className="leading-relaxed">{projects[0].description}</p>
            </div>
          </div>

          {/* Right Project */}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <CodeIcon className="block w-8 text-gray-500 mb-4" />
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {projects[2].subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {projects[2].title}
              </h1>
              <p className="leading-relaxed">{projects[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
