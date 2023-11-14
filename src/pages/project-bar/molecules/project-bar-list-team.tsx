import { useState } from "react";
import "../styles/project-bar-list-team.css";
import { HidingArrowCircle } from "../../../icons/hiding-arrow-circle/hiding-arrow-circle";

export const ProjectBarListTeam = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="ProjectBarListItem ProjectBarListTeam">
      <div className="ProjectBarListItem__Header">
        <div className="ProjectBarListItem__Header__Title">Team Members</div>
        <HidingArrowCircle onCLick={changeIsOpen} isActive={isOpen} />
      </div>
      <div
        className={
          isOpen
            ? "ProjectBarListItem__Info--open ProjectBarListItem__Info"
            : "ProjectBarListItem__Info--close ProjectBarListItem__Info"
        }
      ></div>
    </div>
  );
};
