import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface card {
  image: string;
  description: string;
}

const MiniCard = (props: card) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="border-2 border-solid border-[#D7A514] p-6 md:p-12 rounded-xl bg-[#080834] m-12 flex flex-col items-center max-w-xs mx-auto md:max-w-md" // Added max-w-* classes and mx-auto for centering
    >
      <Image
        height={50}
        width={50}
        src={props.image}
        alt=""
        className="w-80 md:w-30 lg:w-40 h-60 md:h-30 lg:h-40 "
      />
      <h1
        data-aos="fade-up"
        className="text-center mt-6 md:mt-10 text-xl text-[#D7A514]"
      >
        {props.description}
      </h1>
    </div>
  );
};

export default MiniCard;
