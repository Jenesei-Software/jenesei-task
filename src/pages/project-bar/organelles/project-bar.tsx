import { Outlet } from "react-router-dom";
import { useState } from "react";

import { ProjectBarList } from "../molecules/project-bar-list";
import { HidingArrow } from "@icons/hiding-arrow/hiding-arrow";
import { StyleProjectBar, StyleProjectBarLine } from "./project-bar.styles";

export const ProjectBar = () => {
  const [isBarOpen, setIsBarOpen] = useState<boolean>(true);
  const changeIsBarOpen = () => {
    setIsBarOpen(!isBarOpen);
  };
  return (
    <StyleProjectBar isBarOpen={isBarOpen}>
      <ProjectBarList isBarOpen={isBarOpen} />
      <StyleProjectBarLine>
        <HidingArrow.SquareRightLong
          onCLick={changeIsBarOpen}
          active={isBarOpen}
          rotateDeg={180}
        />
      </StyleProjectBarLine>
      <Outlet />
    </StyleProjectBar>
  );
};
