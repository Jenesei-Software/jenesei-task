import { HidingArrow } from "@icons/hiding-arrow/hiding-arrow";
import { useState } from "react";
import {
  StyleProjectBarListItem,
  StyleProjectBarListItemHeader,
  StyleProjectBarListItemHeaderTitle,
  StyleProjectBarListItemInfo,
} from "./project-bar-list-item.styles";

interface IProjectBarListItem {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  isBarOpen: boolean;
}
export const ProjectBarListItem: React.FC<IProjectBarListItem> = (
  props: IProjectBarListItem
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyleProjectBarListItem isBarOpen={props.isBarOpen}>
      <StyleProjectBarListItemHeader>
        <StyleProjectBarListItemHeaderTitle>
          {props.title}
        </StyleProjectBarListItemHeaderTitle>
        <HidingArrow.CircleDown
          onCLick={changeIsOpen}
          active={isOpen}
          rotateDeg={180}
        />
      </StyleProjectBarListItemHeader>
      <StyleProjectBarListItemInfo isOpen={isOpen}>
        {props.children}
      </StyleProjectBarListItemInfo>
    </StyleProjectBarListItem>
  );
};
