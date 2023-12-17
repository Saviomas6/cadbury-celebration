import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LyricsPageContainer = styled.div`
  padding: 20px 0;
`;

export const LyricsTextContainer = styled.div`
  height: 400px;
  border-radius: 12px 5px 5px 12px;
  color: ${theme.black};
  background-color: ${theme.white};
  padding: 16px;
  box-sizing: border-box;
  overflow: auto;
  margin-top: 20px;
`;
