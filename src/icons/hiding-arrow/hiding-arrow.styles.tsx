import styled from "styled-components";

interface IStyleHidingArrow {
  active?: boolean;
  rotateDeg?: number;
}
export const StyleHidingArrow = styled.div<IStyleHidingArrow>`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
  }

  & svg {
    transition: transform 0.3s;
    transform-origin: center center;

    transform: ${(props) =>
      props.active ? props.rotateDeg ? `rotate(${props.rotateDeg}deg)` : "" : ""};
  }

  & path {
    transition: fill 0.3s;

    fill: ${(props) => (props.active ? "transparent" : "var(--font-color-3)")};
    &:hover {
      fill: ${(props) =>
        props.active ? "var(--block-color-5)" : "var(--block-color-brand-08)" };
    }
  }
`;

export const StyleHidingArrowWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
