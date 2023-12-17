import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NavbarLayout = styled.div`
  background-color: ${theme.bodyColor};
  position: sticky;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  align-items: center;
  z-index: 1000;
`;
export const NavbarMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 80px;
  align-items: center;
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImageContainer = styled.div`
  height: 32px;
`;

export const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;
export const TitleImageContainer = styled.div`
  height: 75px;
`;

export const HamburgerMenuContainer = styled.div`
  height: 20px;
`;
