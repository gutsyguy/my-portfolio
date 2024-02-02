import { useEffect } from "react";
import LeftTimelineContainer from "../LeftTimelineContainer";
import RightTimelineContainer from "../RightTimelineContainer";
import Navbar from "../Navbar";
import data from "@/pages/api/data";
import AOS from "aos";
import "aos/dist/aos.css";

const checkTimelineSide = (count: number) => {
  if (count % 2 == 0) {
    return false;
  } else {
    return true;
  }
};

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className=" bg-black bg-no-repeat bg-cover text-white"
      style={{
        backgroundImage: `url(${require("public/Timeline.svg")})`,
      }}
      id="Timeline"
    >
      <div className="ml-[7rem]">
        <h1 data-aos="fade-up" className="text-[2rem] text-[#D8A206]">
          <b id="About">What I have done</b>
        </h1>
        <h1 data-aos="fade-up" className="text-[5rem]">
          <b>Experience</b>
        </h1>
      </div>
      <div className="min-h-screen bg-black py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden sm:block w-1 bg-[#001d3d] absolute h-full left-1/2 transform -translate-x-1/2"></div>
            {data.timeline.map(({ timelineElement, i }: any) =>
              checkTimelineSide(i) ? (
                <LeftTimelineContainer
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="1000"
                  title={timelineElement.title}
                  type="Apprenticeship"
                  key={i}
                  date="September 2020 - Present"
                  description="Joined  freshman year"
                />
              ) : (
                <RightTimelineContainer
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="1000"
                  title="Team Edge"
                  type="program"
                  date="July 2021 - June 2022"
                  key={i}
                  description=" A yearlong program where I build websites with the flask framework and a camera with the raspberry pi"
                />
              )
            )}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Timeline;
