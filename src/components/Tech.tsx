import BallCanvas from "./canvas/BallCanvas";
import { technologies } from "../constants/index";

const Tech = () => {
  return (
    <div className="w-9/12 m-auto flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 cursor-grab" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
