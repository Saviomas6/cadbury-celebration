import styled from "styled-components";
import { theme } from "../../styles/theme";
export const SideBarMainLayout = styled.div<{ isSideBarOpen: boolean }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: ${({ isSideBarOpen }) => (isSideBarOpen ? "0%" : "-100%")};
  background-color: ${theme.bodyColor};
  transition: 420ms;
  padding: 24px;
  box-sizing: border-box;
  z-index: 100;
`;
export const SideBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  position: relative;
`;
export const SideBarLogoMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideBarLogoContainer = styled.div`
  height: 50px;
  width: 150px;
`;
export const SideBarLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;
export const SideBarText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.white};
  margin-top: 40px;
  cursor: pointer;
`;

export const CloseLogoContainer = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const CloseLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;
