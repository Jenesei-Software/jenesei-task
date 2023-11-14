import { IIcon } from "../interface";

export function HidingArrowSquareRightLong(props: IIcon) {
  return (
    <div
      className={
        props.isActive
          ? "Icon-Directions__Bar__Button--active Icon-Directions__Bar__Button Icon-Directions__Bar__Button--coup"
          : "Icon-Directions__Bar__Button--non-active Icon-Directions__Bar__Button"
      }
      onClick={props.onCLick}
    >
      <svg
        className="Icon-Directions__Bar__Button__SVG"
        width="20"
        height="60"
        viewBox="0 0 20 60"
        fill="none"
      >
        <g id="Right">
          <path
            className="Icon-Directions__Bar__Button__SVG__Path"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 0C17.7614 0 20 2.23858 20 5V55C20 57.7614 17.7614 60 15 60H5C2.23858 60 0 57.7614 0 55V5C0 2.23858 2.23858 0 5 0H15ZM10.7626 29.8232C10.8602 29.9209 10.8602 30.0791 10.7626 30.1768L8.46967 32.4697C8.17678 32.7626 8.17678 33.2374 8.46967 33.5303C8.76256 33.8232 9.23744 33.8232 9.53033 33.5303L11.8232 31.2374C12.5066 30.554 12.5066 29.446 11.8232 28.7626L9.53033 26.4697C9.23744 26.1768 8.76256 26.1768 8.46967 26.4697C8.17678 26.7626 8.17678 27.2374 8.46967 27.5303L10.7626 29.8232Z"
            fill="#2B3F6C"
          />
        </g>
      </svg>
    </div>
  );
}
