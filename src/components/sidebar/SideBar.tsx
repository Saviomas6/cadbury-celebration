import {
  CloseLogo,
  CloseLogoContainer,
  SideBarContainer,
  SideBarLogo,
  SideBarLogoContainer,
  SideBarLogoMainContainer,
  SideBarMainLayout,
  SideBarText,
} from "./style";
import Cross from "../../assets/images/Cross.png";
import Logo from "../../assets/images/Cadbury Logo.png";

interface I_Props {
  isSideBarOpen: boolean;
  setSideBarOpen(value: boolean): void;
}

const sideBarData = [
  {
    id: 1,
    label: "How to create lyrics",
  },
  {
    id: 2,
    label: "Privacy Policy",
  },
  {
    id: 3,
    label: "Terms & Conditions",
  },
  {
    id: 4,
    label: "Contact Us",
  },
];

const SideBar = ({ isSideBarOpen, setSideBarOpen }: I_Props) => {
  return (
    <div>
      <SideBarMainLayout isSideBarOpen={isSideBarOpen}>
        <SideBarContainer>
          <SideBarLogoMainContainer>
            <SideBarLogoContainer>
              <SideBarLogo src={Logo} alt="logo" />
            </SideBarLogoContainer>
          </SideBarLogoMainContainer>
          {sideBarData.map((value) => (
            <SideBarText key={value.id}>{value.label}</SideBarText>
          ))}
          <CloseLogoContainer>
            <CloseLogo
              src={Cross}
              alt="cross"
              onClick={() => setSideBarOpen(!isSideBarOpen)}
            />
          </CloseLogoContainer>
        </SideBarContainer>
      </SideBarMainLayout>
    </div>
  );
};

export default SideBar;
