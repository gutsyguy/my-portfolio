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
          <h1
            className="text-[4rem]
            text-[#D8A206]"
            data-aos="fade-up"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
          >
            Languages
          </h1>
          <ul className="text-[2rem]">
            {skillData.Languages.map((language, i) => (
              <div
                key={i}
                className="mb-3 lg:m-5 sm:m-1 flex flex-col"
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
            className="
            text-[4rem] 
            text-[#D8A206]"
            data-aos="fade-up"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
          >
            Technologies
          </h1>
          <ul className="text-[2rem]">
            {skillData.Frameworks.map((framework, i) => (
              <div
                key={i}
                className="mb-3 lg:m-5 sm:m-1 flex flex-col"
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
            className="text-[4rem] 
            text-[#D8A206]"
            data-aos="fade-up"
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
          >
            Miscellanous
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
