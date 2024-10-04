import React from "react";
import { useLanguage } from "./LanguageContext";

const About: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section id="about" className="w-11/12 lg:w-9/12 m-auto pt-16">
      <p className=" mt-4 text-[#aaa6c3] text-[20px] max-w-3xl leading-[30px]">
        {language === "en" ? "Introduction" : "介紹"}
      </p>
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        {language === "en" ? "Overview." : "關於我"}
      </h3>
      {language === "en" ? (
        <p className=" mt-4 text-[#aaa6c3] text-[17px] lg:text-[22px] max-w-3xl">
          I am a self-taught web developer with strong expertise in{" "}
          <span className="text-[#EE534F]">TypeScript and JavaScript</span>, and
          extensive experience working with modern frameworks like{" "}
          <span className="text-[#EE534F]">React, Node.js, and Next.js.</span>{" "}
          I’m passionate about learning new technologies and problem-solving,
          whether <span className="text-[#EE534F]">working independently</span>{" "}
          or{" "}
          <span className="text-[#EE534F]">
            as part of a collaborative team.
          </span>{" "}
          My self-learning ability allow me to effectively contribute to diverse
          projects and deliver efficient, scalable solutions. Let’s build
          something great together!
        </p>
      ) : (
        <p className=" mt-4 text-[#aaa6c3] text-[17px] lg:text-[22px] max-w-3xl">
          我是一名自學網頁開發者，擅長使用
          <span className="text-[#EE534F]">TypeScript 和 JavaScript</span>
          ，並具有豐富的現代框架經驗，如
          <span className="text-[#EE534F]">
            React、Node.js 和 Next.js。
          </span>{" "}
          我熱衷於學習新技術和解決問題，無論是
          <span className="text-[#EE534F]">獨立工作</span> 還是
          <span className="text-[#EE534F]">與團隊合作。</span>{" "}
          我的自學能力使我能夠有效地為各種項目做出貢獻，並提供高效、可擴展的解決方案。
          讓我們一起創造一些了不起的東西吧！
        </p>
      )}
    </section>
  );
};

export default About;
