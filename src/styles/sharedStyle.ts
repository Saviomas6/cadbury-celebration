import { keyframes, styled } from "styled-components";
import { theme } from "./theme";

export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const bounce = keyframes`
   0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const zoomInOut = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const OpacityAnimation = styled.div<any>`
  animation: ${opacityAnimation} 1.5s;
`;

export const DesktopScreenMainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DesktopScreenText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.white};
`;

export const DesktopScreenContainer = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
`;

export const MobileScreenContainer = styled.div`
  @media screen and (max-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export const Wrapper = styled.div``;

export const TextLabel = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.white};
  text-align: center;
`;

export const SelectEmojiLayoutContainer = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
`;
export const SelectEmojiMainWrapper = styled.div``;

export const SelectEmojiMainContainer = styled.div<any>`
  height: 45px;
  width: ${({ width }) => width || "45px"};
  background-color: ${({ valueSelected }) =>
    valueSelected ? theme.buttonColor : theme.white};
  padding: 10px;
  font-size: 30px;
  border-radius: ${({ borderRadius }) => borderRadius || "100%"};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectEmojiImage = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
  display: flex;
`;

export const SelectEmojiText = styled.div`
  font-size: 7px;
  font-weight: 500;
  color: ${theme.white};
  text-align: center;
`;
export const ToneImageAnimation = styled.div<any>`
  height: 50px;
  width: 50px;
  position: absolute;
  top: ${({ top }) => top || "50px"};
  right: ${({ right }) => right || "0px"};
  left: ${({ left }) => left};
  animation: ${bounce} 2s infinite alternate;
`;
export const ToneImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;

export const ErrorMessageText = styled.div`
  color: #ff0000;
  font-size: 16px;
`;
