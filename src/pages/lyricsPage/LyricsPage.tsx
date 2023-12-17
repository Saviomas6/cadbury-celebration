import Button from "../../components/button/Button";
import { OpacityAnimation, TextLabel } from "../../styles/sharedStyle";
import { theme } from "../../styles/theme";
import {
  HomePageButtonContainer,
  LyricsPageContainer,
  LyricsTextContainer,
} from "./style";

interface I_Props {
  text: string;
  setIsLyricsGenerated(value: boolean): void;
  setCurrentForm(value: number): void;
}

const LyricsPage = ({
  text,
  setIsLyricsGenerated,
  setCurrentForm,
}: I_Props) => {
  return (
    <OpacityAnimation>
      <LyricsPageContainer>
        <TextLabel>Your song lyrics are ready!</TextLabel>
        <LyricsTextContainer>{text}</LyricsTextContainer>
        <HomePageButtonContainer>
          <Button
            text="Generate Again"
            bgColor={theme.buttonColor}
            textColor={theme.bodyColor}
            border={`1px solid ${theme.buttonColor}`}
            type="button"
            onClick={() => {
              setCurrentForm(0);
              setIsLyricsGenerated(false);
            }}
          />
        </HomePageButtonContainer>
      </LyricsPageContainer>
    </OpacityAnimation>
  );
};

export default LyricsPage;
