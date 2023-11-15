import { HidingArrow } from "@icons/hiding-arrow/hiding-arrow";
import { useState } from "react";

interface IProjectBarListItem {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}
export const ProjectBarListItem: React.FC<IProjectBarListItem> = (
  props: IProjectBarListItem
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="ProjectBarListItem ProjectBarListTime">
      <div className="ProjectBarListItem__Header">
        <div className="ProjectBarListItem__Header__Title">{props.title}</div>
        <HidingArrow.CircleDown
          onCLick={changeIsOpen}
          active={isOpen}
          rotateDeg={180}
        />
      </div>
      <div
        className={
          isOpen
            ? "ProjectBarListItem__Info--open ProjectBarListItem__Info"
            : "ProjectBarListItem__Info--close ProjectBarListItem__Info"
        }
      >
        {props.children}
      </div>
    </div>
  );
};
