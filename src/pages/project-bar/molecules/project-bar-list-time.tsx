import { useState } from "react";
import "../styles/project-bar-list-time.css";
import { HidingArrowCircle } from "../../../icons/hiding-arrow-circle/hiding-arrow-circle";

export const ProjectBarListTime = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="ProjectBarListItem ProjectBarListTime">
      <div className="ProjectBarListItem__Header">
        <div className="ProjectBarListItem__Header__Title">Time</div>
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
