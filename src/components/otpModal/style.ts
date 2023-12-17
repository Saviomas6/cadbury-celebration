import styled from "styled-components";
import { OpacityAnimation } from "../../styles/sharedStyle";
import { theme } from "../../styles/theme";

export const ModalMainContainer = styled.div<{ bgColor?: string }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
`;

export const ModalContainer = styled.div`
  background-color: ${theme.white};
  color: #fff;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  position: relative;
  animation: ${OpacityAnimation} 0.3s;
`;

export const ModalHeading = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.bodyColor};
  text-align: center;
`;

export const ConfirmPinContainer = styled.div`
  margin-top: 20px;
`;

export const ResendOTPText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.bodyColor};
  text-decoration: underline;
  margin-top: 5px;
  text-align: end;
`;

export const ConfirmModalButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 130px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
