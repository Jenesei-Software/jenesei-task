import styled from "styled-components";

export const StyleProjectBarListProjectsItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background: #f5f5f5;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  padding: 6px;
  width: 100%;
  text-decoration: none;
  gap: 10px;
  @media (orientation: portrait) {
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 4px;
    width: 60px;
    height: 40px;
    text-align: center;
    line-height: normal;
    gap: 2px;
  }
`;

interface IStyleProjectBarListProjectsItemTitle {
  isLocation: boolean;
}
export const StyleProjectBarListProjectsItemTitle = styled.div<IStyleProjectBarListProjectsItemTitle>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 4px 8px;
  max-width: 140px;
  overflow: hidden;
  text-overflow: clip;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-5);
  background: ${(props) =>
    props.isLocation ? `var(--block-color-brand-08)` : `#fff`};
  color: ${(props) =>
    props.isLocation ? `var(--font-color-white)` : `var(--font-color-2)`};

  @media (orientation: portrait) {
    border-radius: 4px;
    padding: 3px 4px;
    max-width: 40px;
    overflow: hidden;
    text-overflow: clip;
    font-size: var(--font-size-1);
  }
`;

export const StyleProjectBarListProjectsItemEdit = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  @media (orientation: portrait) {
  }
`;