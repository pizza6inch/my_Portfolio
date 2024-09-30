import React from "react";
import githubSvg from "../assets/github.svg";
import instagramSvg from "../assets/instagram.svg";
import img104 from "../assets/company/104.jpg";
import cake from "../assets/company/cake.jpg";

const Footer: React.FC = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-around items-center border-t-2 border-cyan-950 mt-5  h-[90px]">
      <p className="text-gray-500 ">Terms & Conditions | Privacy Policy</p>
      <div className="flex justify-between w-[300px]">
        <a href="https://github.com/pizza6inch">
          <img src={githubSvg} alt="github" className="lg:w-10 lg:h-10 w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/pg206206">
          <img src={instagramSvg} alt="instagram" className="lg:w-10 lg:h-10 w-6 h-6" />
        </a>
        <a href="https://www.cake.me/me/pizza6inch">
          <img src={cake} alt="instagram" className="lg:w-10 lg:h-10 w-6 h-6" />
        </a>
        <a href="https://pda.104.com.tw/profile/preview?vno=76187ag7y">
          <img src={img104} alt="instagram" className="lg:w-10 lg:h-10 w-6 h-6" />
        </a>
      </div>
      <p className="text-gray-500 ">&copy; 2024 ZHANG,HUI-WU. All rights reserved.</p>
    </div>
  );
};

export default Footer;
