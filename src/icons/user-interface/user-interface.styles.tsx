import styled, { css, keyframes } from "styled-components";

interface IStyleUserInterface {
  active?: boolean;
  rotateDeg?: number;
}
export const StyleUserInterfaceBar = styled.div<IStyleUserInterface>`
  width: 100%;
  height: 100%;
  border-radius: 16px;

  cursor: pointer;
  user-select: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${(props) =>
    props.active
      ? css`
          ${opacityActive} 1s ease
        `
      : css`
          ${opacityNotActive} 1s ease
        `};

  animation-fill-mode: ${(props) => (props.active ? `forwards` : "forwards")};

  background-color: ${(props) =>
    props.active ? `var(--block-color-brand-08)` : ""};

  &:hover {
    & path {
      fill: ${(props) =>
        props.active ? "var(--block-color-5)" : "var(--block-color-brand-08)"};
    }
  }

  & svg {
  }

  & path {
    fill: var(--font-color-1);
    transition: all 0.2s;

    fill: ${(props) =>
      props.active ? "var(--block-color-1)" : "var(--font-color-1)"};
  }
`;

const opacityActive = keyframes`
0% {
  opacity: 1;
}
30% {
  opacity: 0.5;
}
50% {
  opacity: 0.2;
}
70% {
  opacity: 0.5;
}
100% {
  opacity: 1;
}
`;

const opacityNotActive = keyframes`
0% {
  opacity: 1;
}
30% {
  opacity: 0.5;
}
50% {
  opacity: 0.2;
}
70% {
  opacity: 0.5;
}
100% {
  opacity: 1;
}
`;

export const StyleUserInterfaceWrapperBar = styled.div`
  width: 56px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleUserInterfaceIcon = styled.div<IStyleUserInterface>`
  width: 100%;
  height: 100%;

  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleUserInterfaceWrapperIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleUserInterfaceWrapperMiniIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;