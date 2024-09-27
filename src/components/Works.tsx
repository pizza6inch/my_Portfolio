import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import github from "../assets/github.png";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  live_demo_link: string;
};

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}: ProjectCardProps) => {
  return (
    <div
    // className=" cursor-pointer"
    // onClick={() => window.open(live_demo_link, "_blank")}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-700 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl object-left"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <section id="works" className="w-11/12 lg:w-9/12 m-auto">
      <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        My work
      </p>
      <h2 className="text-white mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Projects.
      </h2>

      <div className="text-white w-full flex mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
