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
  SelectEmojiLayoutContainer,
  SelectEmojiMainContainer,
  SelectEmojiMainWrapper,
  SelectEmojiText,
  TextLabel,
} from "../../../../styles/sharedStyle";
import Headphone from "../../../../assets/images/Headphone.png";
import Button from "../../../../components/button/Button";
import { theme } from "../../../../styles/theme";
import SelectOuterBox from "../../../../components/selectOuterBox/SelectOuterBox";
import { useState } from "react";

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

const SecondUserDetail = () => {
  const [isSingerSelected, setIsSingerSelected] = useState("male");
  const [isMoodSelected, setIsMoodSelected] = useState("happy");
  const [isGenreSelected, setIsGenreSelected] = useState("rap");

  const initialValue = {};

  const handleSubmitForm = () => {};
  return (
    <div>
      <Formik initialValues={initialValue} onSubmit={handleSubmitForm}>
        <Form>
          <FirstUserDetailContainer>
            <TextLabel>What would you like their song's vibe to be?</TextLabel>
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
                type="button"
                onClick={() => {}}
              />
            </UserDetailButtonContainer>
          </FirstUserDetailContainer>
        </Form>
      </Formik>
    </div>
  );
};

export default SecondUserDetail;
