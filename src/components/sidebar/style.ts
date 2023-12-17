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
