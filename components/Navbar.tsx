import React, { useState } from "react";
import Link from "next/link";
import yalamber from "@/public/images/yalamber.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap px-6 bg-[#001d3d] text-white border-2 border-[#ffc300]">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        {/* <img
          src="/images/yalamber.png"
          className="w-100 h-10 mr-2"
          alt="Logo"
        /> */}
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-center px-4 lg:flex-grow text-2xl hover:bg-[]">
          <Link
            href="/"
            className="block lg:inline-block lg:mt-0 text-white-200 p-5 mr-4 hover:bg-[#003566]"
          >
            Home
          </Link>
          <Link
            href="/Experience"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 p-5 mr-4 hover:bg-[#003566]"
          >
            Experience
          </Link>
          <Link
            href="/projects/project"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 p-5 hover:bg-[#003566]"
          >
            Projects
          </Link>
          <Link
            href="/Skills"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 p-5 hover:bg-[#003566]"
          >
            Skills
          </Link>
        </div>
        <div>
          {/* <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
            Click Me
          </button> */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
