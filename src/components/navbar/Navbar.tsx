import { Container } from "../../styles/sharedStyle";
import * as Styled from "./style";
import CadburyLogo from "../../assets/images/Cadbury Logo.png";
import birthdayLogo from "../../assets/images/2d logo.png";
import Hamburger from "../../assets/images/Hamburger.png";
import SideBar from "../sidebar/SideBar";
import { useState } from "react";

const Navbar = () => {
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <Styled.NavbarLayout>
      <Container width="90%">
        <Styled.NavbarMainContainer>
          <Styled.LogoTitleWrapper>
            <Styled.LogoImageContainer>
              <Styled.LogoImage src={CadburyLogo} alt="logo" />
            </Styled.LogoImageContainer>
            <Styled.TitleImageContainer>
              <Styled.LogoImage src={birthdayLogo} alt="title" />
            </Styled.TitleImageContainer>
          </Styled.LogoTitleWrapper>
          <Styled.HamburgerMenuContainer>
            <Styled.LogoImage
              src={Hamburger}
              alt="menu"
              onClick={() => setSideBarOpen(!isSideBarOpen)}
            />
          </Styled.HamburgerMenuContainer>
        </Styled.NavbarMainContainer>
        <SideBar
          isSideBarOpen={isSideBarOpen}
          setSideBarOpen={setSideBarOpen}
        />
      </Container>
    </Styled.NavbarLayout>
  );
};

export default Navbar;
