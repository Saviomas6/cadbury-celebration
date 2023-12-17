import {
  LandingPageContainer,
  LandingPageImage,
  LandingPageImageContainer,
  LandingPageMainContainer,
  LandingPageText,
} from "./style";
import imgBG from "../../assets/images/Celebration.png";
import { Container } from "../../styles/sharedStyle";
const LandingPage = () => {
  return (
    <Container width="90%">
      <LandingPageMainContainer>
        <LandingPageContainer>
          <LandingPageImageContainer>
            <LandingPageImage src={imgBG} alt="img" />
          </LandingPageImageContainer>
          <LandingPageText>
            A unique birthday song for everyone!
          </LandingPageText>
          <LandingPageText>
            दिल हमारा Chocolate 🍫 कि तरह नाजुक, तुम उसमें Dry Fruits का तड़का,☺
          </LandingPageText>
        </LandingPageContainer>
      </LandingPageMainContainer>
    </Container>
  );
};

export default LandingPage;
