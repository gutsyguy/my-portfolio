import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skill from "@/components/Skill";
import SkillCard from "@/components/SkillCard";
import data from "@/pages/api/data";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillData = data.skills;

  return (
    <div className="text-white bg-black" id="Skills">
      <div className="text-center">
        <div className="">
          <div className="text-center pt-[1rem]">
            <h1 data-aos="fade-up" className="text-[2rem] text-[#D8A206]">
              <b id="About">What I have learned</b>
            </h1>
            <h1 data-aos="fade-up" className="text-[5rem]">
              <b>Skills</b>
            </h1>
          </div>
          <ul className="text-[2rem]">
            {skillData.Languages.map((language, i) => (
              <div
                key={i}
                className="my-3 lg:m-5 sm:m-1 flex flex-col"
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-show-on-load="false"
                data-te-animation="[slide-right_1s_ease-in-out]"
                data-aos="fade-up"
              >
                <SkillCard
                  key={i}
                  image={language.image}
                  proficiency={language.profiency}
                  description={language.name}
                  level={language.level}
                />
              </div>
            ))}
          </ul>
        </div>
        <div className="">
          <h1
            className="text-[5rem]"
            data-aos="fade-up"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
          >
            <b>Technologies</b>
          </h1>
          <ul className="text-[2rem]">
            {skillData.Frameworks.map((framework, i) => (
              <div
                key={i}
                className="my-3 lg:m-5 sm:m-1 flex flex-col"
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-show-on-load="false"
                data-te-animation="[slide-right_1s_ease-in-out]"
                data-aos="fade-up"
              >
                <SkillCard
                  key={i}
                  image={framework.image}
                  proficiency={framework.profiency}
                  description={framework.name}
                  level={framework.level}
                />
              </div>
            ))}
          </ul>
        </div>
        <div className="">
          <h1
            className="text-[5rem]"
            data-aos="fade-up"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
          >
            <b>Miscellanous</b>
          </h1>
          <ul className="text-[2rem]">
            {skillData.Miscellanous.map((miscellanous, i) => (
              <div
                key={i}
                className="pb-3 lg:px-5 sm:p-1 flex flex-col"
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-show-on-load="false"
                data-te-animation="[slide-right_1s_ease-in-out]"
                data-aos="fade-up"
              >
                <SkillCard
                  key={i}
                  image={miscellanous.image}
                  proficiency={miscellanous.profiency}
                  description={miscellanous.name}
                  level={miscellanous.level}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
