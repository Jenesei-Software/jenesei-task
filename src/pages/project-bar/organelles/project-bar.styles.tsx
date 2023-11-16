import styled from "styled-components";

interface IStyleProjectBar {
  isBarOpen: boolean;
}
export const StyleProjectBar = styled.div<IStyleProjectBar>`
  display: grid;
  grid-template-rows: 100dvh;
  transition: grid-template-columns 0.15s ease-in-out;

  grid-template-columns: ${(props) =>
    props.isBarOpen ? "220px 2px 1fr" : "0px 2px 1fr"};

  @media (orientation: portrait) {
    padding: 2dvw;
    height: 100%;
  }
`;

export const StyleProjectBarLine = styled.div`
  display: flex;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: var(--background);
  width: 100%;
  height: 100%;

  & :hover path {
    fill: var(--block-color-5);
  }
`;
