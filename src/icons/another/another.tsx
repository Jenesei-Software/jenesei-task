import {
  StyleHidingArrow,
  StyleHidingArrowWrapper,
} from "@icons/hiding-arrow/hiding-arrow.styles";

export interface IUserInterface {
  onClick?: () => void;
  active?: boolean;
  rotateDeg?: number;
  title?: string;
}

export const Another = {
  MoreCircle: function (props: IUserInterface) {
    return (
      <StyleHidingArrowWrapper onClick={props.onClick} title={props.title}>
        <StyleHidingArrow active={props.active} rotateDeg={props.rotateDeg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM6.0498 12.2998C6.74016 12.2998 7.2998 11.7402 7.2998 11.0498C7.2998 10.3594 6.74016 9.7998 6.0498 9.7998C5.35945 9.7998 4.7998 10.3594 4.7998 11.0498C4.7998 11.7402 5.35945 12.2998 6.0498 12.2998ZM12.2998 11.0498C12.2998 11.7402 11.7402 12.2998 11.0498 12.2998C10.3594 12.2998 9.7998 11.7402 9.7998 11.0498C9.7998 10.3594 10.3594 9.7998 11.0498 9.7998C11.7402 9.7998 12.2998 10.3594 12.2998 11.0498ZM16.0498 12.2998C16.7402 12.2998 17.2998 11.7402 17.2998 11.0498C17.2998 10.3594 16.7402 9.7998 16.0498 9.7998C15.3594 9.7998 14.7998 10.3594 14.7998 11.0498C14.7998 11.7402 15.3594 12.2998 16.0498 12.2998Z"
              fill="#2B3F6C"
            />
          </svg>
        </StyleHidingArrow>
      </StyleHidingArrowWrapper>
    );
  },
};
