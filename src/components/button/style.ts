import styled from "styled-components";

export const ButtonContainer = styled.button<{
  border?: string;
  bgColor?: string;
  textColor?: string;
}>`
  height: 45px;
  outline: none;
  border: ${({ border }) => border || "none"};
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${({ bgColor }) => bgColor || "none"};
  color: ${({ textColor }: any) => textColor || "none"};
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
  }
`;

export const LoadingContainer = styled.span`
  display: inline-block;
  height: 100%;
  width: 90px;
  color: red;
`;
