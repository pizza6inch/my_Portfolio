import React from "react";

const Hero: React.FC = () => {
  return (
    <div className=" w-full h-screen">
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
    </div>
  );
};

export default Hero;
