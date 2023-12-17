import { useEffect, useState } from "react";
import { Container, OpacityAnimation, Wrapper } from "../styles/sharedStyle";
import RegistrationPage from "./registrationPage/RegistrationPage";
import UserDetailPage from "./userDetailPage/UserDetailPage";

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedDataString = window.localStorage.getItem("loginData");
    if (savedDataString) {
      const savedData = JSON.parse(savedDataString);
      if (savedData.name) {
        setIsLoggedIn(true);
      }
    }
  }, []);
  return (
    <Container width="90%">
      <Wrapper>
        <OpacityAnimation>
          {isLoggedIn ? (
            <UserDetailPage />
          ) : (
            <RegistrationPage setIsLoggedIn={setIsLoggedIn} />
          )}
        </OpacityAnimation>
      </Wrapper>
    </Container>
  );
};

export default MainPage;
