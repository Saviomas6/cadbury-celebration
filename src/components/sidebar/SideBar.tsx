import {
  CloseLogo,
  CloseLogoContainer,
  SideBarContainer,
  SideBarMainLayout,
} from "./style";
import Cross from "../../assets/images/Cross.png";

interface I_Props {
  isSideBarOpen: boolean;
  setSideBarOpen(value: boolean): void;
}

const SideBar = ({ isSideBarOpen, setSideBarOpen }: I_Props) => {
  return (
    <div>
      <SideBarMainLayout isSideBarOpen={isSideBarOpen}>
        <SideBarContainer>
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
