import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Project = ({ projectData }: Props) => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const run = () => {
      for (let i = 0; i < projectData.tools.len; i++) {
        setTools(projectData.tools[i]);
        if (projectData.tools[i]) {
          console.log(projectData.tools[i]);
        } else {
          console.log("Eev");
        }
      }
    };
    run();
  }, [tools, projectData]);
  // console.log(projectData);
  return (
    <div className="bg-black h-full  px-[10rem] text-white">
      <h1 className="text-[4rem] py-[1rem]">{projectData.title}</h1>
      <div className="flex my-[1rem]">
        <h2 className="mr-[1rem] ">{projectData.collabs}</h2>
        <h2>{projectData.date}</h2>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[3rem]">{projectData.projectFor}</h1>
        <h2 className="text-[2rem]">{projectData.description}</h2>
        <Image
          src={projectData.image}
          alt="Elgoog image"
          width={800}
          height={800}
          className="flex justify-center"
        />
        <h2 className="text-[2rem]">Tools Used</h2>
        <ul>
          {projectData.tools.map((tool: any, i: number) => (
            <li
              key={i}
              // className="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3 m-5 flex flex-row"
              data-te-animation-init
              data-te-animation-start="onScroll"
              data-te-animation-on-scroll="repeat"
              data-te-animation-show-on-load="false"
              data-te-animation="[slide-right_1s_ease-in-out]"
              data-aos="fade-up"
            >
              {tool}
            </li>
          ))}
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <footer className="text-[2rem]">
        <h1>This project is very interesting</h1>
        <Link href={projectData.github}>Source Code</Link>
      </footer>
    </div>
  );
};

export const getServerSideProps = async (
  context: any
): Promise<{ props: { projectData?: any; notFound?: any } }> => {
  const { project } = context.query;

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://yalamber-subba.vercel.app"
      : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/projects/project/${project}`, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
  });

  const projectData = await res.json();
  return {
    props: {
      projectData,
    },
  };
};

export default Project;
