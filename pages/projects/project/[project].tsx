import React from "react";
import Router, { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Project = ({ projectData }: Props) => {

  console.log(projectData);
  return (
    <div className="bg-black h-full  px-[10rem] text-white">
      <h1 className="text-[4rem] py-[1rem]">{projectData.title}</h1>
      <div className="flex my-[1rem]">
        <h2 className="mr-[1rem] ">Collabrators</h2>
        <h2>February 11, 2023</h2>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[3rem]">Project for lancer hacks</h1>
        <h2 className="text-[2rem]">Description</h2>
        <Image
          src="/images/Elgoog.png"
          alt="Elgoog image"
          width={800}
          height={800}
          className="flex justify-center"
        />
      </div>
      <footer className="text-[2rem]">
        <h1>Outer</h1>
        <Link href="">Source Code</Link>
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
