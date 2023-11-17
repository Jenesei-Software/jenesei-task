import { StyleInput } from "@styles/StyleInput";
import styled from "styled-components";

export const StyleProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (orientation: portrait) {
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 8px;
  }
`;
export const StyleProjectHeaderTitle = styled.div`
  min-width: 120px;
  color: var(--font-color-2);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-4);
  @media (orientation: portrait) {
  }
`;

export const StyleProjectHeaderInput = styled(StyleInput)`
  max-width: 240px;
  @media (orientation: portrait) {
  }
`;
