import { Tilt } from "react-tilt";

import github from "../assets/github.png";
import { projects } from "../constants/index";
import { useLanguage } from "./LanguageContext";

type ProjectCardProps = {
  name: string;
  description: { en: string; cn: string };
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  live_demo_link?: string;
  index: number;
  language: "en" | "cn";
};

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  language,
}: ProjectCardProps) => {
  return (
    <div
      className="w-full lg:w-[360px] cursor-pointer"
      onClick={() => window.open(live_demo_link, "_blank")}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-700 p-5 rounded-2xl   w-full"
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
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-grab"
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
          <p className="mt-2 text-white text-[14px]">{description[language]}</p>
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
  const { language } = useLanguage();
  return (
    <section id="projects" className="w-11/12 lg:w-9/12 m-auto pt-16">
      <p className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">
        My work
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Projects.
      </h2>
      {language === "en" ? (
        <p className="text-[#aaa6c3] w-full mt-3 text-[22px] max-w-3xl ">
          Following projects showcases my skills and experience through
          real-world examples of my work.{" "}
          <span className="text-[#EE534F]">
            Each project is briefly described with links to code repositories
            and live demos in it.
          </span>{" "}
          It reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </p>
      ) : (
        <p className="text-[#aaa6c3] w-full mt-3 text-[22px] max-w-3xl ">
          以下專案展現了我的技能和經驗，包含專案的實際開發。{" "}
          <span className="text-[#EE534F]">
            每個專案都有簡要描述，其中包含github的連結，內部包含了live
            demo可以參觀。
          </span>{" "}
          這些專案反映了我解決複雜問題、使用不同技術和有效管理頁面狀態的能力。
        </p>
      )}

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            language={language}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
