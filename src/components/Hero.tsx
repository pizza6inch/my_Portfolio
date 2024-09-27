import React from "react";

import PizzaCanvas from "./canvas/PizzaCanvas";

import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="hero" className=" w-full h-screen relative cursor-grab">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-60 violet-gradient" />
        </div>

        <div>
          <h1
            className={
              "font-black text-white lg:text-[80px]  text-[50px] lg:leading-[98px] mt-2 "
            }
          >
            Hi, I'm <span className="text-[#915EFF]">Ewan</span>
          </h1>
          <p
            className={
              "text-[#dfd9ff] font-medium lg:text-[30px]  text-[26px] lg:leading-[40px] mt-2 text-white-100"
            }
          >
            I am a front-end developer, <br className="sm:block hidden" />
            this is my portfolio, take a look around :)
          </p>
        </div>
      </div>

      <PizzaCanvas />

      <div className="absolute bottom-4 lg:bottom-0 w-full h-80 flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
