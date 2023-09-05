"use client";
//libraries
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./api/data";
import Project from "@/components/Project";
import ContactForm from "@/components/ContactForm";

//sections
import Skills from "@/components/sections/Skills";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="flex justify-center pt-[2rem] pb-[2rem] bg-black bg-no-repeat bg-cover text-white"
        style={{ backgroundImage: "url('/Timeline.svg')" }}
      >
        <div className=" opacity-75 pt-[15rem] pb-[25rem] ">
          <h1 data-aos="fade-up" className="text-[5rem]">
            Hi I&apos;m
            <b className="text-[5rem] inline-block text-[#D8A206] ml-4">
              Yalamber
            </b>
          </h1>
          <h2 data-aos="fade-up" className="text-[3rem] text-center">
            Software Engineer
          </h2>
        </div>
      </div>

      <About image="/nextlogo.png" />

      <div className=" text-white bg-black">
        <h1 className="text-center text-[3rem]" data-aos="fade-up">
          Popular Projects
        </h1>

        <div className="flex justify-center flex-wrap">
          <div
            className="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3 m-5 flex flex-row"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
            data-aos="fade-up"
          >
            <Project project={data.projects[0]}></Project>
          </div>
          <div
            className="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3 m-5 flex flex-row"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
            data-aos="fade-up"
          >
            <Project project={data.projects[1]}></Project>
          </div>
          <div
            className="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3 m-5 flex flex-row"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
            data-aos="fade-up"
          >
            <Project project={data.projects[2]}></Project>
          </div>
        </div>
        <Link
          data-aos="fade-up"
          href="#projects"
          className="ml-[9rem] text-[2rem]"
        >
          See all projects
        </Link>
      </div>
      <div className="#Contact text-white bg-black pt-[5rem]">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
