import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="w-11/12 lg:w-9/12 m-auto pt-16">
      <p className=" mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">Introduction</p>
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h3>

      <p className=" mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like
        React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to
        life!
      </p>
    </section>
  );
};

export default About;
