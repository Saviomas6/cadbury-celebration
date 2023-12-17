import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SelectOuterBoxContainer = styled.div`
  border: 1px solid ${theme.buttonColor};
  border-radius: 8px;
`;
export const SelectOuterBoxHeading = styled.div`
  height: 30px;
  font-size: 16px;
  color: ${theme.bodyColor};
  font-weight: 600;
  border-radius: 6px 6px 0 0;
  background-color: ${theme.buttonColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectOuterBoxContent = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;
