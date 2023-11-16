import { UserInterface } from "@icons/user-interface/user-interface";
import { StyleProjectBarListProjectsItemEdit } from "./project-bar-list-projects-item-edit.style";

interface IProjectBarListProjectsItemEdit {
  onClick: () => void;
}
export const ProjectBarListProjectsItemEdit = (
  props: IProjectBarListProjectsItemEdit
) => {
  return (
    <StyleProjectBarListProjectsItemEdit onClick={(e) => e.stopPropagation()}>
      <UserInterface.BurgerMini onCLick={props.onClick} />
    </StyleProjectBarListProjectsItemEdit>
  );
};
