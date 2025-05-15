import React from "react";
import { technologies } from "../constants/index";
import { BallCanvas } from "./canvas";

const Technologies = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
