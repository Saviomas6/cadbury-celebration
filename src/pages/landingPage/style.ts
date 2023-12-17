import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LandingPageMainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingPageContainer = styled.div``;

export const LandingPageImageContainer = styled.div`
  height: 320px;
  width: 320px;
`;
export const LandingPageImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;
export const LandingPageText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.white};
  margin-top: 10px;
  text-align: center;
`;
