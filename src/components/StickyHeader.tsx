"use client"
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const StickyHeader: React.FC = () => {
  // Function to handle smooth scroll to a specific section
  const handleScroll = (id: string, offset = 0) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky -top-2 pt-10 md:pt-24 bg-background p-6 z-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between md:items-center">
        <div className="flex gap-10 items-center">
          <button
            className="px-5 py-1 duration-200 bg-neutral-900 hover:bg-neutral-800 rounded-full"
            onClick={() => handleScroll("about", 200)}
          >
            About
          </button>
          <button
            className="px-5 py-1 duration-200 bg-neutral-900 hover:bg-neutral-800 rounded-full"
            onClick={() => handleScroll("experience", 200)}
          >
            Experience
          </button>
          <button
            className="px-5 py-1 duration-200 bg-neutral-900 hover:bg-neutral-800 rounded-full"
            onClick={() => handleScroll("work", 200)}
          >
            Work
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <Link href="https://www.linkedin.com/in/ayanfeoluwa-runsewe-527009335/" target="_blank">
            <FaLinkedin className="text-4xl rounded-lg duration-300 hover:bg-neutral-900 bg-neutral-800 p-2" />
          </Link>
          <Link href="https://github.com/arunsewe?tab=repositories" target="_blank">
            <FaGithub className="text-4xl rounded-lg duration-300 hover:bg-neutral-900 bg-neutral-800 p-2" />
          </Link>
          <Link href="mailto:ayanferunsewe@gmail.com" target="_blank">
            <FaEnvelope className="text-4xl rounded-lg duration-300 hover:bg-neutral-900 bg-neutral-800 p-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
