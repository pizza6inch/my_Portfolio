import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="w-11/12 lg:w-9/12 m-auto pt-16">
      <p className=" mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">Introduction</p>
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h3>

      <p className=" mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">
        I am a self-taught web developer with strong expertise in TypeScript and JavaScript, and extensive experience
        working with modern frameworks like React, Node.js, and Next.js. I’m passionate about learning new technologies
        and problem-solving, whether working independently or as part of a collaborative team. My self-learning ability
        allow me to effectively contribute to diverse projects and deliver efficient, scalable solutions. Let’s build
        something great together!
      </p>
    </section>
  );
};

export default About;
