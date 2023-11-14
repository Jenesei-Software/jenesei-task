import { IIcon } from "../interface";

export function HidingArrowCircle(props: IIcon) {
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
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Down">
          <path
            className="Icon-Directions__Bar__Button__SVG__Path"
            id="Subtract"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 5.33895e-08 15.5228 1.19249e-07 10C1.85108e-07 4.47715 4.47715 -1.85108e-07 10 -1.19249e-07C15.5228 -5.33895e-08 20 4.47715 20 10ZM9.86661 10.9007C9.96551 11.0072 10.1341 11.0072 10.233 10.9007L12.7502 8.18986C13.0321 7.88632 13.5066 7.86875 13.8101 8.1506C14.1137 8.43245 14.1313 8.907 13.8494 9.21053L11.3322 11.9214C10.6398 12.667 9.45977 12.667 8.76742 11.9214L6.25021 9.21053C5.96836 8.907 5.98593 8.43245 6.28947 8.1506C6.593 7.86875 7.06755 7.88632 7.3494 8.18986L9.86661 10.9007Z"
            fill="#2B3F6C"
          />
        </g>
      </svg>
    </div>
  );
}
