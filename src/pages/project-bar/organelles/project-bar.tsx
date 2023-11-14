import { Outlet } from "react-router-dom";

import { ProjectBarList } from "../molecules/project-bar-list";

import "../styles/project-bar.css";
import { useState } from "react";
import { HidingArrowSquareRightLong } from "@icons/hiding-arrow-square-right-long/hiding-arrow-square-right-long";

export const ProjectBar = () => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(true);
  const changeIsBarOpen = () => {
    setIsBarOpen(!isBarOpen);
  };
  return (
    <div
      className={
        isBarOpen
          ? "ProjectBar--open ProjectBar"
          : "ProjectBar--close ProjectBar"
      }
    >
      <ProjectBarList changeIsBarOpen={changeIsBarOpen} isBarOpen={isBarOpen} />
      <div className="ProjectBar__Line">
        <HidingArrowSquareRightLong onCLick={changeIsBarOpen} isActive={isBarOpen} />
      </div>
      <Outlet />
    </div>
  );
};
