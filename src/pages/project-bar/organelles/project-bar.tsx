import { Outlet } from "react-router-dom";
import { useState } from "react";

import { ProjectBarList } from "../molecules/project-bar-list";

import "../styles/project-bar.css";

import { HidingArrow } from "@icons/hiding-arrow/hiding-arrow";

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
        <HidingArrow.SquareRightLong
          onCLick={changeIsBarOpen}
          active={isBarOpen}
          rotateDeg={180}
        />
      </div>
      <Outlet />
    </div>
  );
};
