import styled from "styled-components";

export const StyleProjectBarListProjectsItemZero = styled.div`
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  padding: 6px;
  width: 100%;
  text-decoration: none;
  gap: 10px;
  @media (orientation: portrait) {
  }
`;
export const StyleProjectBarListProjectsItemZeroTitle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 4px 8px;
  max-width: 140px;
  overflow: hidden;
  text-overflow: clip;
  font-size: var(--font-size-2);
  background: transparent;
  cursor: pointer;
  color: var(--font-color-3);
  font-weight: var(--font-weight-3);

  @media (orientation: portrait) {
  }
`;
