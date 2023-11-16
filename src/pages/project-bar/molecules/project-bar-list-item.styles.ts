import styled, { css, keyframes } from "styled-components";

interface IStyleProjectBarListItem {
  isBarOpen: boolean;
}
export const StyleProjectBarListItem = styled.div<IStyleProjectBarListItem>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  overflow: hidden;

  animation: ${(props) =>
    props.isBarOpen
      ? css`${StyleProjectBarListItem__Two} 0.15s ease`
      : css`${StyleProjectBarListItem__One} 0.15s ease`};

  animation-fill-mod: ${(props) => (props.isBarOpen ? "forwards" : "forwards")};

  @media (orientation: portrait) {
  }
`;
export const StyleProjectBarListItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (orientation: portrait) {
  }
`;
export const StyleProjectBarListItemHeaderTitle = styled.div`
  color: var(--font-color-2);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-5);
  @media (orientation: portrait) {
  }
`;

interface IStyleProjectBarListItemInfo {
  isOpen: boolean;
}
export const StyleProjectBarListItemInfo = styled.div<IStyleProjectBarListItemInfo>`
  transition: all 0.15s ease-in-out;
  overflow: hidden;

  margin-top: ${(props) => (props.isOpen ? `14px` : `0px`)};
  max-height: ${(props) => (props.isOpen ? `100%` : `0px`)};

  @media (orientation: portrait) {
  }
`;

const StyleProjectBarListItem__One = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const StyleProjectBarListItem__Two = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
