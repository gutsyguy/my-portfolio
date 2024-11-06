"use client";
//libraries
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./api/data";
import Project from "@/components/Project";
import PopupCard2 from "@/components/popupCard2";

//sections
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

const images = [
  { 
    imgURL: "https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg",
    imgAlt: "alt 1"

  },
  { 
    imgURL: "https://i1.sndcdn.com/artworks-1pUq6gooy1ifMnzk-YU1k6g-t500x500.jpg",
    imgAlt: "alt 2"
  },{ 
    imgURL: "https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg",
    imgAlt: "alt 1"

  },
  { 
    imgURL: "https://i1.sndcdn.com/artworks-1pUq6gooy1ifMnzk-YU1k6g-t500x500.jpg",
    imgAlt: "alt 2"
  },{ 
    imgURL: "https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg",
    imgAlt: "alt 1"

  },
  { 
    imgURL: "https://i1.sndcdn.com/artworks-1pUq6gooy1ifMnzk-YU1k6g-t500x500.jpg",
    imgAlt: "alt 2"
  },
];



  return (
    <div>
      <div
        className="flex justify-center pt-[2rem] pb-[2rem] bg-black bg-no-repeat bg-cover text-white"
        style={{ backgroundImage: "url('/Timeline.svg')" }}
      >
        <div className="opacity-75 pt-[15rem] pb-[25rem] ">
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

        <div className="flex justify-center">
          <div
            className="
            "
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
            data-aos="fade-up"
          >
          <PopupCard2>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </PopupCard2>
          </div>
        </div>
        
      </div>
      <div className="#Contact text-white bg-black pt-[5rem]">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
