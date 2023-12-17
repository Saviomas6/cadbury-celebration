import { Form, Formik } from "formik";
import {
  FirstUserDetailContainer,
  FirstUserDetailImage,
  FirstUserDetailImageContainer,
  FirstUserDetailImageMainContainer,
  SelectBoxMainWrapper,
  UserDetailButtonContainer,
} from "../../style";
import {
  OpacityAnimation,
  SelectEmojiLayoutContainer,
  SelectEmojiMainContainer,
  SelectEmojiMainWrapper,
  SelectEmojiText,
  TextLabel,
  ToneImage,
  ToneImageAnimation,
} from "../../../../styles/sharedStyle";
import Headphone from "../../../../assets/images/Headphone.png";
import Button from "../../../../components/button/Button";
import { theme } from "../../../../styles/theme";
import SelectOuterBox from "../../../../components/selectOuterBox/SelectOuterBox";
import { useEffect, useState } from "react";
import tone from "../../../../assets/images/Yellow tone.png";
import ballon from "../../../../assets/images/Balloon2.png";

const genderData = [
  {
    id: 1,
    label: "Male",
    value: "male",
    img: <span>&#x1F466;</span>,
  },
  {
    id: 2,
    label: "Female",
    value: "female",
    img: <span>&#x1F469;</span>,
  },
];

const moodData = [
  {
    id: 1,
    label: "Happy",
    value: "happy",
    img: <span>&#x1F604;</span>,
  },
  {
    id: 2,
    label: "Romantic",
    value: "romantic",
    img: <span>&#x1F60D;</span>,
  },
  {
    id: 3,
    label: "Funny",
    value: "funny",
    img: <span>&#x1F61C;</span>,
  },
  {
    id: 4,
    label: "Motivational",
    value: "motivational",
    img: <span>&#x1F610;</span>,
  },
  {
    id: 5,
    label: "Clam",
    value: "clam",
    img: <span>&#x1F642;</span>,
  },
];

const genreData = [
  {
    id: 1,
    label: "Rap",
    value: "rap",
    img: <span>&#x1F4FB;</span>,
  },
  {
    id: 2,
    label: "Rock",
    value: "rock",
    img: <span>&#x1F3B8;</span>,
  },
  {
    id: 3,
    label: "Pop",
    value: "pop",
    img: <span>&#x1F3A4;</span>,
  },
  {
    id: 4,
    label: "Desi",
    value: "desi",
    img: <span>&#x1F941;</span>,
  },
  {
    id: 5,
    label: "EDM",
    value: "edm",
    img: <span>&#x1F642;</span>,
  },
];

const SecondUserDetail = ({ next, data, isLoading }: any) => {
  const [isSingerSelected, setIsSingerSelected] = useState("male");
  const [isMoodSelected, setIsMoodSelected] = useState("happy");
  const [isGenreSelected, setIsGenreSelected] = useState("rap");

  const handleSubmitForm = (values: any) => {
    next(values, true);
  };
  return (
    <OpacityAnimation>
      <Formik initialValues={data} onSubmit={handleSubmitForm}>
        {({ setFieldValue }) => {
          useEffect(() => {
            setFieldValue("singerVoice", isSingerSelected);
          }, [isSingerSelected]);
          useEffect(() => {
            setFieldValue("mood", isMoodSelected);
          }, [isMoodSelected]);
          useEffect(() => {
            setFieldValue("genre", isGenreSelected);
          }, [isMoodSelected]);
          return (
            <Form>
              <FirstUserDetailContainer>
                <TextLabel>
                  What would you like their song's vibe to be?
                </TextLabel>
                <FirstUserDetailImageMainContainer>
                  <FirstUserDetailImageContainer>
                    <FirstUserDetailImage src={Headphone} alt="img" />
                  </FirstUserDetailImageContainer>
                </FirstUserDetailImageMainContainer>
                <SelectBoxMainWrapper>
                  <SelectOuterBox heading="Mood">
                    <SelectEmojiLayoutContainer>
                      {moodData?.map((value) => (
                        <SelectEmojiMainWrapper
                          key={value.value}
                          onClick={() => setIsMoodSelected(value.value)}>
                          <SelectEmojiMainContainer
                            valueSelected={value.value === isMoodSelected}>
                            {value.img}
                          </SelectEmojiMainContainer>
                          <SelectEmojiText>{value.label}</SelectEmojiText>
                        </SelectEmojiMainWrapper>
                      ))}
                    </SelectEmojiLayoutContainer>
                  </SelectOuterBox>
                </SelectBoxMainWrapper>

                <SelectBoxMainWrapper>
                  <SelectOuterBox heading="Genre">
                    <SelectEmojiLayoutContainer>
                      {genreData?.map((value) => (
                        <SelectEmojiMainWrapper
                          key={value.value}
                          onClick={() => setIsGenreSelected(value.value)}>
                          <SelectEmojiMainContainer
                            valueSelected={value.value === isGenreSelected}>
                            {value.img}
                          </SelectEmojiMainContainer>
                          <SelectEmojiText>{value.label}</SelectEmojiText>
                        </SelectEmojiMainWrapper>
                      ))}
                    </SelectEmojiLayoutContainer>
                  </SelectOuterBox>
                </SelectBoxMainWrapper>
                <SelectBoxMainWrapper>
                  <SelectOuterBox heading="Singer Voice">
                    <SelectEmojiLayoutContainer justifyContent="space-evenly">
                      {genderData?.map((value) => (
                        <SelectEmojiMainWrapper
                          key={value.value}
                          onClick={() => setIsSingerSelected(value.value)}>
                          <SelectEmojiMainContainer
                            width="80px"
                            borderRadius="10px"
                            valueSelected={value.value === isSingerSelected}>
                            {value.img}
                          </SelectEmojiMainContainer>
                          <SelectEmojiText>{value.label}</SelectEmojiText>
                        </SelectEmojiMainWrapper>
                      ))}
                    </SelectEmojiLayoutContainer>
                  </SelectOuterBox>
                </SelectBoxMainWrapper>
                <UserDetailButtonContainer>
                  <Button
                    text="Proceed"
                    bgColor={theme.buttonColor}
                    textColor={theme.bodyColor}
                    border={`1px solid ${theme.buttonColor}`}
                    disabled={isLoading}
                    isLoading={isLoading}
                    type="submit"
                  />
                </UserDetailButtonContainer>
                <ToneImageAnimation>
                  <ToneImage src={tone} alt="img" />
                </ToneImageAnimation>
                <ToneImageAnimation top="100px" left="0px">
                  <ToneImage src={ballon} alt="img" />
                </ToneImageAnimation>
              </FirstUserDetailContainer>
            </Form>
          );
        }}
      </Formik>
    </OpacityAnimation>
  );
};

export default SecondUserDetail;
