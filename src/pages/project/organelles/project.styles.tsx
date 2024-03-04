import styled from "styled-components";

export const StyleProject = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-start: 1;
  grid-row-end: auto;
  grid-column-start: 3;
  grid-column-end: 4;
  overflow: hidden;
  gap: 20px;

  & .swiper-pagination-bullet-active {
    background: var(--block-color-brand) !important;
  }

`;
export const StyleProjectColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  overflow-x: auto;

`;
