import React from "react";
import Router, { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";

const Project = ({
  projectId,
}:any): InferGetServerSidePropsType<typeof getServerSideProps> => {
  const router = useRouter();
  const { project } = router.query;
  console.log("id");
  console.log(project);
  return (
    <div className="bg-black h-full  px-[10rem] text-white">
      <h1 className="text-[4rem] py-[1rem]">Title</h1>
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

export async function getServerSideProps({
  params,
}: {
  params: {
    project: string;
  };
}): Promise<{ props: { projectId: string } }> {
  console.log(params);
  const { project } = params;
  return {
    props: {
      projectId: project,
    },
  };
}

export default Project;
