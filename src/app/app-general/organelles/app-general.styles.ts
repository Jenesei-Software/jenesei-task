import styled from "styled-components";

export const StyleAppGeneral = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 100dvh;
  padding-right: 12px;
  width: 100dvw;
  box-sizing: border-box;

  @media (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: 36px 40px 1fr;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    min-height: 100dvh;
    padding-right: 2dvw;
    padding-left: 2dvw;
    padding-bottom: 2dvw;
  }
`;

export const StyleAppGeneralOutlet = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: auto;
    background: var(--block-color-1);
    height: 100%;

  @media (orientation: portrait) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    }
  }
`;
