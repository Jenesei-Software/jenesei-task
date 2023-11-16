import styled from "styled-components";

export const StyleAppGeneralBar = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: auto;
  display: flex;
  padding: 24px 12px 24px 12px;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;

  @media (orientation: portrait) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    padding: 0;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 12px 0px 12px;
  }
`;

export const StyleAppGeneralBarNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (orientation: portrait) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    }
  }
`;
