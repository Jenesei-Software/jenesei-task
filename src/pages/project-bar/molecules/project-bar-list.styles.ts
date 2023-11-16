import styled from "styled-components";

interface IStyleProjectBarList {
  isBarOpen: boolean;
}
export const StyleProjectBarList = styled.div<IStyleProjectBarList>`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  align-items: stretch;
  transition: max-width 0.15s ease-in-out;
  width: 100%;
  height: 100%;
  overflow: hidden;
  gap: 0px;
  
  max-width: ${(props) => (props.isBarOpen ? "100%" : "0px")};

  @media (orientation: portrait) {
  }
`;
