import { Container, OpacityAnimation, Wrapper } from "../styles/sharedStyle";
import RegistrationPage from "./registrationPage/RegistrationPage";

const MainPage = () => {
  return (
    <Container width="90%">
      <Wrapper>
        <OpacityAnimation>
          <RegistrationPage />
        </OpacityAnimation>
      </Wrapper>
    </Container>
  );
};

export default MainPage;
