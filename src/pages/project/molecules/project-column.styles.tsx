import styled from "styled-components";

export const StyleProjectColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  background-color: var(--block-color-1);
  padding: 16px;
  width: 300px;
  min-width: 300px;
  gap: 10px;

`;

export const StyleProjectColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (orientation: portrait) {
  }
`;

export const StyleProjectColumnHeaderTitle = styled.div`
  padding-left: 8px;
  color: var(--font-color-2);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-4);
  @media (orientation: portrait) {
  }
`;

export const StyleProjectColumnList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  height: 100%;
  min-height: 1px;
  user-select: none;

  @media (orientation: portrait) {
  }
`;
