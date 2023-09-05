"use client";
import React, { useEffect } from "react";
import MiniCard from "../MiniCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

interface about {
  image: string;
}

const About = (props: about) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black text-white pb-20">
      <div className="px-6 md:px-16 lg:px-28">
        <div className="flex flex-wrap items-center">
          <Image
            className="p-2 "
            src="/images/yalamber.png"
            width={400}
            data-aos="fade-up"
            height={400}
            alt="Yalamber"
          />
          <div className="text-[#D8A206]  flex-1 ml-6" data-aos="fade-up">
            <h1 className="flex justify-center lg:text-[5rem] md:text-[3rem] text-[2rem] text-white">
              Who I Am
            </h1>
            <p className="text-center text-[1rem] md:text-[1.5rem] lg:text-[2rem]">
              I am currently a Senior at Alameda Science and Technology
              Institute. I enjoy programming, hardware, movies and gaming. I can
              work well with a team and by myself. I am eager to work in
              different types of software and hardware development.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center m-20 text-[5rem]" data-aos="fade-up">
        Specialties
      </h1>
      <div className="flex justify-center flex-wrap mt-12">
        <MiniCard
          data-aos="fade-up"
          image="/images/nextlogo.png"
          description="Web Developer"
        />
        <MiniCard
          data-aos="fade-up"
          image="/images/unitylogo.png"
          description="Game Developer"
        />
        <MiniCard
          data-aos="fade-up"
          image="/images/android.png"
          description="Mobile Developer"
        />
        <MiniCard
          data-aos="fade-up"
          image="/images/tensorflowlogo.png"
          description="ML engineer"
        />
      </div>
    </div>
  );
};

export default About;
