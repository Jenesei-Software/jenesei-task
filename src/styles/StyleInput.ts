import styled from "styled-components";

export const StyleInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: 100%;
  height: 36px;
  padding-left: 15px;
  padding-right: 15px;
  color: #333;
  text-align: left;
  border: 1px solid #d6d6d6;
  background: #fff;
  background-clip: padding-box;
  border-radius: 8px;
  position: relative;
  font-style: normal;
  font-weight: var(--font-weight-0);

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: var(--font-weight-0) !important;
    color: #666666 !important;
    font-style: normal !important;
  }
  @media (orientation: portrait) {
  }
`;
StyleInput.defaultProps = {
  minLength: 4,
  maxLength: 40,
};
