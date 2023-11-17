import {
  StyleHidingArrow,
  StyleHidingArrowWrapper,
} from "./hiding-arrow.styles";

export interface IHidingArrow {
  onClick?: () => void;
  active?: boolean;
  rotateDeg?: number;
}

export const HidingArrow = {
  CircleDown: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 5.33895e-08 15.5228 1.19249e-07 10C1.85108e-07 4.47715 4.47715 -1.85108e-07 10 -1.19249e-07C15.5228 -5.33895e-08 20 4.47715 20 10ZM9.86661 10.9007C9.96551 11.0072 10.1341 11.0072 10.233 10.9007L12.7502 8.18986C13.0321 7.88632 13.5066 7.86875 13.8101 8.1506C14.1137 8.43245 14.1313 8.907 13.8494 9.21053L11.3322 11.9214C10.6398 12.667 9.45977 12.667 8.76742 11.9214L6.25021 9.21053C5.96836 8.907 5.98593 8.43245 6.28947 8.1506C6.593 7.86875 7.06755 7.88632 7.3494 8.18986L9.86661 10.9007Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleUp: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 10C20 4.47715 15.5228 5.33895e-08 10 1.19249e-07C4.47715 1.85108e-07 5.33895e-08 4.47715 1.19249e-07 10C1.85108e-07 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM9.86661 9.0993C9.96551 8.99279 10.1341 8.99279 10.233 9.09931L12.7502 11.8101C13.0321 12.1137 13.5066 12.1313 13.8101 11.8494C14.1137 11.5675 14.1313 11.093 13.8494 10.7895L11.3322 8.07863C10.6398 7.33301 9.45977 7.33301 8.76742 8.07863L6.25021 10.7895C5.96836 11.093 5.98593 11.5675 6.28947 11.8494C6.593 12.1313 7.06755 12.1137 7.3494 11.8101L9.86661 9.0993Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleRight: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 8.74228e-07C15.5228 3.91405e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.35705e-06 15.5228 8.74228e-07 10C3.91405e-07 4.47715 4.47715 1.35705e-06 10 8.74228e-07ZM10.9007 10.1334C11.0072 10.0345 11.0072 9.8659 10.9007 9.767L8.18986 7.24979C7.88632 6.96794 7.86875 6.49339 8.1506 6.18986C8.43245 5.88632 8.907 5.86875 9.21053 6.1506L11.9214 8.66781C12.667 9.36016 12.667 10.5402 11.9214 11.2326L9.21053 13.7498C8.907 14.0316 8.43245 14.0141 8.1506 13.7105C7.86875 13.407 7.88632 12.9325 8.18986 12.6506L10.9007 10.1334Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleLeft: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM9.0993 9.86661C8.99279 9.96551 8.99279 10.1341 9.09931 10.233L11.8101 12.7502C12.1137 13.0321 12.1313 13.5066 11.8494 13.8101C11.5675 14.1137 11.093 14.1313 10.7895 13.8494L8.07863 11.3322C7.33301 10.6398 7.33301 9.45977 8.07863 8.76742L10.7895 6.25021C11.093 5.96836 11.5675 5.98593 11.8494 6.28947C12.1313 6.593 12.1137 7.06755 11.8101 7.3494L9.0993 9.86661Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleRightStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 10C20 4.47715 15.5228 3.91405e-07 10 8.74228e-07C4.47715 1.35705e-06 3.91405e-07 4.47715 8.74228e-07 10C1.35705e-06 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM12.1893 10.75L10.4697 12.4697C10.1768 12.7626 10.1768 13.2374 10.4697 13.5303C10.7626 13.8232 11.2374 13.8232 11.5303 13.5303L13.8232 11.2374C14.5066 10.554 14.5066 9.44598 13.8232 8.76256L11.5303 6.46967C11.2374 6.17678 10.7626 6.17678 10.4697 6.46967C10.1768 6.76256 10.1768 7.23744 10.4697 7.53033L12.1893 9.25L6 9.25C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75L12.1893 10.75Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleLeftStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM7.81066 9.25L9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967L6.17678 8.76256C5.49336 9.44598 5.49336 10.554 6.17678 11.2374L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303C9.82322 13.2374 9.82322 12.7626 9.53033 12.4697L7.81066 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H7.81066Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleDownStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 -5.33895e-08 10 -1.19249e-07C4.47715 -1.85108e-07 1.85108e-07 4.47715 1.19249e-07 10C5.33895e-08 15.5228 4.47715 20 10 20ZM9.25 12.1893L7.53033 10.4697C7.23744 10.1768 6.76256 10.1768 6.46967 10.4697C6.17678 10.7626 6.17678 11.2374 6.46967 11.5303L8.76256 13.8232C9.44598 14.5066 10.554 14.5066 11.2374 13.8232L13.5303 11.5303C13.8232 11.2374 13.8232 10.7626 13.5303 10.4697C13.2374 10.1768 12.7626 10.1768 12.4697 10.4697L10.75 12.1893L10.75 6C10.75 5.58579 10.4142 5.25 10 5.25C9.58579 5.25 9.25 5.58579 9.25 6L9.25 12.1893Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleUpStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.19249e-07C15.5228 5.33895e-08 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.85108e-07 15.5228 1.19249e-07 10C5.33895e-08 4.47715 4.47715 1.85108e-07 10 1.19249e-07ZM9.25 7.81066L7.53033 9.53033C7.23744 9.82322 6.76256 9.82322 6.46967 9.53033C6.17678 9.23744 6.17678 8.76256 6.46967 8.46967L8.76256 6.17678C9.44598 5.49336 10.554 5.49336 11.2374 6.17678L13.5303 8.46967C13.8232 8.76256 13.8232 9.23744 13.5303 9.53033C13.2374 9.82322 12.7626 9.82322 12.4697 9.53033L10.75 7.81066L10.75 14C10.75 14.4142 10.4142 14.75 10 14.75C9.58579 14.75 9.25 14.4142 9.25 14L9.25 7.81066Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleUpRightStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.19249e-07C15.5228 5.33895e-08 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.85108e-07 15.5228 1.19249e-07 10C5.33895e-08 4.47715 4.47715 1.85108e-07 10 1.19249e-07ZM12.0784 8.98231L12.0784 11.4143C12.0784 11.8285 12.4142 12.1643 12.8284 12.1643C13.2426 12.1643 13.5784 11.8285 13.5784 11.4143L13.5784 8.17165C13.5784 7.20515 12.7949 6.42165 11.8284 6.42165L8.58575 6.42165C8.17153 6.42165 7.83575 6.75744 7.83575 7.17165C7.83575 7.58586 8.17153 7.92165 8.58575 7.92165L11.0177 7.92165L6.6412 12.2982C6.34831 12.5911 6.34831 13.0659 6.6412 13.3588C6.9341 13.6517 7.40897 13.6517 7.70186 13.3588L12.0784 8.98231Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleUpLeftStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.19249e-07C4.47715 5.33895e-08 -5.33895e-08 4.47715 -1.19249e-07 10C-1.85108e-07 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 1.85108e-07 10 1.19249e-07ZM7.92161 8.98231L7.92161 11.4143C7.92161 11.8285 7.58583 12.1643 7.17161 12.1643C6.7574 12.1643 6.42161 11.8285 6.42161 11.4143L6.42161 8.17165C6.42161 7.20515 7.20512 6.42165 8.17161 6.42165L11.4143 6.42165C11.8285 6.42165 12.1643 6.75744 12.1643 7.17165C12.1643 7.58586 11.8285 7.92165 11.4143 7.92165L8.98227 7.92165L13.3588 12.2982C13.6517 12.5911 13.6517 13.0659 13.3588 13.3588C13.0659 13.6517 12.591 13.6517 12.2981 13.3588L7.92161 8.98231Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleDownRightStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 -5.33895e-08 10 -1.19249e-07C4.47715 -1.85108e-07 1.85108e-07 4.47715 1.19249e-07 10C5.33895e-08 15.5228 4.47715 20 10 20ZM12.0784 11.0177L12.0784 8.58571C12.0784 8.1715 12.4142 7.83571 12.8284 7.83571C13.2426 7.83571 13.5784 8.1715 13.5784 8.58571L13.5784 11.8284C13.5784 12.7949 12.7949 13.5784 11.8284 13.5784L8.58575 13.5784C8.17153 13.5784 7.83575 13.2426 7.83575 12.8284C7.83575 12.4141 8.17153 12.0784 8.58575 12.0784L11.0177 12.0784L6.6412 7.70183C6.34831 7.40893 6.34831 6.93406 6.6412 6.64117C6.9341 6.34827 7.40897 6.34827 7.70186 6.64117L12.0784 11.0177Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  CircleDownLeftStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20C4.47715 20 -5.33895e-08 15.5228 -1.19249e-07 10C-1.85108e-07 4.47715 4.47715 -5.33895e-08 10 -1.19249e-07C15.5228 -1.85108e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.92161 11.0177L7.92161 8.58571C7.92161 8.1715 7.58583 7.83571 7.17161 7.83571C6.7574 7.83571 6.42161 8.1715 6.42161 8.58571L6.42161 11.8284C6.42161 12.7949 7.20512 13.5784 8.17161 13.5784L11.4143 13.5784C11.8285 13.5784 12.1643 13.2426 12.1643 12.8284C12.1643 12.4141 11.8285 12.0784 11.4143 12.0784L8.98227 12.0784L13.3588 7.70183C13.6517 7.40893 13.6517 6.93406 13.3588 6.64117C13.0659 6.34827 12.591 6.34827 12.2981 6.64117L7.92161 11.0177Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareRightLong: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg width="20" height="60" viewBox="0 0 20 60" fill="none">
            <g id="Right">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 0C17.7614 0 20 2.23858 20 5V55C20 57.7614 17.7614 60 15 60H5C2.23858 60 0 57.7614 0 55V5C0 2.23858 2.23858 0 5 0H15ZM10.7626 29.8232C10.8602 29.9209 10.8602 30.0791 10.7626 30.1768L8.46967 32.4697C8.17678 32.7626 8.17678 33.2374 8.46967 33.5303C8.76256 33.8232 9.23744 33.8232 9.53033 33.5303L11.8232 31.2374C12.5066 30.554 12.5066 29.446 11.8232 28.7626L9.53033 26.4697C9.23744 26.1768 8.76256 26.1768 8.46967 26.4697C8.17678 26.7626 8.17678 27.2374 8.46967 27.5303L10.7626 29.8232Z"
                fill="#2B3F6C"
              />
            </g>
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareDown: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 15C20 17.7614 17.7614 20 15 20L5 20C2.23858 20 2.66948e-08 17.7614 5.96244e-08 15L1.78873e-07 5C2.11803e-07 2.23858 2.23858 -2.11803e-07 5 -1.78873e-07L15 -5.96244e-08C17.7614 -2.66948e-08 20 2.23858 20 5L20 15ZM9.82322 10.7626C9.92085 10.8602 10.0791 10.8602 10.1768 10.7626L12.4697 8.46967C12.7626 8.17678 13.2374 8.17678 13.5303 8.46967C13.8232 8.76256 13.8232 9.23744 13.5303 9.53033L11.2374 11.8232C10.554 12.5066 9.44598 12.5066 8.76256 11.8232L6.46967 9.53033C6.17678 9.23744 6.17678 8.76256 6.46967 8.46967C6.76256 8.17678 7.23744 8.17678 7.53033 8.46967L9.82322 10.7626Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareUp: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-2.18557e-07 5C-9.78513e-08 2.23858 2.23858 9.78513e-08 5 2.18557e-07L15 6.55671e-07C17.7614 7.76377e-07 20 2.23858 20 5L20 15C20 17.7614 17.7614 20 15 20L5 20C2.23858 20 -7.76377e-07 17.7614 -6.55671e-07 15L-2.18557e-07 5ZM10.1768 9.23744C10.0791 9.13981 9.92085 9.13981 9.82322 9.23744L7.53033 11.5303C7.23744 11.8232 6.76256 11.8232 6.46967 11.5303C6.17678 11.2374 6.17678 10.7626 6.46967 10.4697L8.76256 8.17678C9.44598 7.49336 10.554 7.49336 11.2374 8.17678L13.5303 10.4697C13.8232 10.7626 13.8232 11.2374 13.5303 11.5303C13.2374 11.8232 12.7626 11.8232 12.4697 11.5303L10.1768 9.23744Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareRight: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 0C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5C0 2.23858 2.23858 0 5 0H15ZM10.7626 9.82322C10.8602 9.92085 10.8602 10.0791 10.7626 10.1768L8.46967 12.4697C8.17678 12.7626 8.17678 13.2374 8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303L11.8232 11.2374C12.5066 10.554 12.5066 9.44598 11.8232 8.76256L9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967C8.17678 6.76256 8.17678 7.23744 8.46967 7.53033L10.7626 9.82322Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareLeft: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5C20 2.23858 17.7614 0 15 0H5ZM9.23744 9.82322C9.13981 9.92085 9.13981 10.0791 9.23744 10.1768L11.5303 12.4697C11.8232 12.7626 11.8232 13.2374 11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303L8.17678 11.2374C7.49336 10.554 7.49336 9.44598 8.17678 8.76256L10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967C11.8232 6.76256 11.8232 7.23744 11.5303 7.53033L9.23744 9.82322Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareDownStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 20C17.7614 20 20 17.7614 20 15L20 5C20 2.23858 17.7614 -2.66948e-08 15 -5.96244e-08L5 -1.78873e-07C2.23858 -2.11803e-07 2.11803e-07 2.23858 1.78873e-07 5L5.96244e-08 15C2.66948e-08 17.7614 2.23858 20 5 20L15 20ZM10.75 12.1893L12.4697 10.4697C12.7626 10.1768 13.2374 10.1768 13.5303 10.4697C13.8232 10.7626 13.8232 11.2374 13.5303 11.5303L11.2374 13.8232C10.554 14.5066 9.44598 14.5066 8.76256 13.8232L6.46967 11.5303C6.17678 11.2374 6.17678 10.7626 6.46967 10.4697C6.76256 10.1768 7.23744 10.1768 7.53033 10.4697L9.25 12.1893L9.25 6C9.25 5.58579 9.58579 5.25 10 5.25C10.4142 5.25 10.75 5.58579 10.75 6L10.75 12.1893Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareUpStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 2.18557e-07C2.23858 9.78513e-08 -9.78513e-08 2.23858 -2.18557e-07 5L-6.55671e-07 15C-7.76377e-07 17.7614 2.23858 20 5 20L15 20C17.7614 20 20 17.7614 20 15L20 5C20 2.23858 17.7614 7.76377e-07 15 6.55671e-07L5 2.18557e-07ZM10.75 7.81066L12.4697 9.53033C12.7626 9.82322 13.2374 9.82322 13.5303 9.53033C13.8232 9.23744 13.8232 8.76256 13.5303 8.46967L11.2374 6.17678C10.554 5.49336 9.44598 5.49336 8.76256 6.17678L6.46967 8.46967C6.17678 8.76256 6.17678 9.23744 6.46967 9.53033C6.76256 9.82322 7.23744 9.82322 7.53033 9.53033L9.25 7.81066L9.25 14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14L10.75 7.81066Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareRightStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 5C20 2.23858 17.7614 0 15 0H5C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5ZM12.1893 9.25L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L13.8232 8.76256C14.5066 9.44598 14.5066 10.554 13.8232 11.2374L11.5303 13.5303C11.2374 13.8232 10.7626 13.8232 10.4697 13.5303C10.1768 13.2374 10.1768 12.7626 10.4697 12.4697L12.1893 10.75L6 10.75C5.58579 10.75 5.25 10.4142 5.25 10C5.25 9.58579 5.58579 9.25 6 9.25L12.1893 9.25Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SquareLeftStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5ZM7.81066 10.75L9.53033 12.4697C9.82322 12.7626 9.82322 13.2374 9.53033 13.5303C9.23744 13.8232 8.76256 13.8232 8.46967 13.5303L6.17678 11.2374C5.49336 10.554 5.49336 9.44598 6.17678 8.76256L8.46967 6.46967C8.76256 6.17678 9.23744 6.17678 9.53033 6.46967C9.82322 6.76256 9.82322 7.23744 9.53033 7.53033L7.81066 9.25H14C14.4142 9.25 14.75 9.58579 14.75 10C14.75 10.4142 14.4142 10.75 14 10.75H7.81066Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  DownStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
          >
            <path
              d="M1 12L4.29289 15.2929C4.68342 15.6834 5.31658 15.6834 5.70711 15.2929L9 12"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5 15L5 1"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  UpStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
          >
            <path
              d="M1 5L4.29289 1.70711C4.68342 1.31658 5.31658 1.31658 5.70711 1.70711L9 5"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5 2L5 16"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  RightStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
          >
            <path
              d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15 5L1 5"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  LeftStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
          >
            <path
              d="M5 1L1.70711 4.29289C1.31658 4.68342 1.31658 5.31658 1.70711 5.70711L5 9"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M2 5L16 5"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  UpLeftStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M8.85333 3.69671L4.19647 3.69671C3.64419 3.69671 3.19647 4.14443 3.19647 4.69671L3.19647 9.35357"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3.90373 4.40385L13.8032 14.3033"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  UpRightStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M8.14667 3.69671L12.8035 3.69671C13.3558 3.69671 13.8035 4.14443 13.8035 4.69671L13.8035 9.35357"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13.0963 4.40385L3.19678 14.3033"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  DownLeftStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M8.85333 14.3033L4.19647 14.3033C3.64419 14.3033 3.19647 13.8556 3.19647 13.3033L3.19647 8.64643"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3.90373 13.5961L13.8032 3.69666"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  DownRightStick: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M8.14667 14.3033L12.8035 14.3033C13.3558 14.3033 13.8035 13.8556 13.8035 13.3033L13.8035 8.64643"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13.0963 13.5961L3.19678 3.69666"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  Up: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
          >
            <path
              d="M1 7L7.21905 1.66939C7.66844 1.2842 8.33156 1.2842 8.78095 1.66939L15 7"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  Down: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
          >
            <path
              d="M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  Right: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
          >
            <path
              d="M0.999999 15L6.33061 8.78095C6.7158 8.33156 6.7158 7.66844 6.33061 7.21905L0.999999 1"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  Left: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
          >
            <path
              d="M7 1L1.66939 7.21905C1.2842 7.66844 1.2842 8.33156 1.66939 8.78095L7 15"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SwapVertical: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M1 4L3.29289 1.70711C3.68342 1.31658 4.31658 1.31658 4.70711 1.70711L7 4"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 2L4 14"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M10 13L12.2929 15.2929C12.6834 15.6834 13.3166 15.6834 13.7071 15.2929L16 13"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13 15L13 3"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SwapHorizontal: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M4 16L1.70711 13.7071C1.31658 13.3166 1.31658 12.6834 1.70711 12.2929L4 10"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M2 13L14 13"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M13 7L15.2929 4.70711C15.6834 4.31658 15.6834 3.68342 15.2929 3.29289L13 1"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15 4L3 4"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  SwapCircle: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              d="M5.07178 8.99992C5.80947 7.7222 6.88612 6.67337 8.18271 5.96938C9.4793 5.26539 10.9453 4.93367 12.4187 5.01088C13.892 5.0881 15.3153 5.57125 16.5312 6.40691C17.7471 7.24257 18.7083 8.3982 19.3083 9.74603"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3.23187 6.51531L3.96128 9.67485C4.08551 10.213 4.62246 10.5485 5.16059 10.4243L8.32013 9.69487"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18.9282 16.9998C18.1905 18.2776 17.1139 19.3264 15.8173 20.0304C14.5207 20.7344 13.0547 21.0661 11.5813 20.9889C10.108 20.9117 8.68467 20.4285 7.46877 19.5928C6.25287 18.7572 5.29175 17.6016 4.69166 16.2537"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M20.7681 19.4844L20.0387 16.3249C19.9145 15.7868 19.3775 15.4512 18.8394 15.5755L15.6799 16.3049"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  Expand: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.92317 17.6923L3.30779 17.6923C2.7555 17.6923 2.30778 17.2446 2.30778 16.6923L2.30779 13.0769"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3.07681 16.9232L8.46143 11.5386"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M17.6921 6.92293L17.6921 3.30754C17.6921 2.75526 17.2443 2.30754 16.6921 2.30754L13.0767 2.30754"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16.9227 3.07681L11.5381 8.46143"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
  Collapse: function (props: IHidingArrow) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.84611 11.5382L7.4615 11.5382C8.01379 11.5382 8.4615 11.9859 8.4615 12.5382L8.4615 16.1535"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M7.69248 12.3073L2.30786 17.6919"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M11.5382 3.84654L11.5382 7.46193C11.5382 8.01421 11.9859 8.46193 12.5382 8.46193L16.1535 8.46193"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12.3075 7.69266L17.6921 2.30804"
              stroke="#2B3F6C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
};
