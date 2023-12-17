import { ErrorMessage, Form, Formik } from "formik";
import {
  FirstUserDetailContainer,
  FirstUserDetailImage,
  FirstUserDetailImageContainer,
  FirstUserDetailImageMainContainer,
  InputField,
  InputFieldContainer,
  InputFieldLabel,
  InputFieldMainContainer,
  UserDetailButtonContainer,
  UserDetailToggleAge,
  UserDetailToggleButton,
  UserDetailToggleButtonWrapper,
  UserDetailToggleContainer,
} from "../../style";
import {
  ErrorMessageText,
  OpacityAnimation,
  TextLabel,
  ToneImage,
  ToneImageAnimation,
} from "../../../../styles/sharedStyle";
import CapGift from "../../../../assets/images/Cap&Gift.png";
import Button from "../../../../components/button/Button";
import { theme } from "../../../../styles/theme";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import tone from "../../../../assets/images/Purple tone.png";
import yellowTone from "../../../../assets/images/Yellow tone.png";

const FirstUserDetail = ({ next, data, validationSchema }: any) => {
  const [genderToggle, setGenderToggle] = useState<string>("Male");
  const [ageCount, setAgeCount] = useState<number>(18);

  const handleSubmitForm = (values: any) => {
    next(values);
  };

  return (
    <OpacityAnimation>
      <Formik
        initialValues={data}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}>
        {({ setFieldValue, isValid, dirty }) => {
          useEffect(() => {
            setFieldValue("gender", genderToggle);
          }, [genderToggle]);
          useEffect(() => {
            setFieldValue("age", ageCount);
          }, [ageCount]);
          return (
            <Form>
              <FirstUserDetailContainer>
                <TextLabel>Tell us about your loved one...</TextLabel>
                <FirstUserDetailImageMainContainer>
                  <FirstUserDetailImageContainer>
                    <FirstUserDetailImage src={CapGift} alt="img" />
                  </FirstUserDetailImageContainer>
                </FirstUserDetailImageMainContainer>

                <InputFieldMainContainer>
                  <InputFieldLabel>Their Name:</InputFieldLabel>
                  <InputFieldContainer>
                    <InputField
                      type="text"
                      name="theirName"
                      placeholder="Name"
                    />
                  </InputFieldContainer>
                  <ErrorMessageText>
                    <ErrorMessage name="theirName" />
                  </ErrorMessageText>
                </InputFieldMainContainer>
                <InputFieldMainContainer>
                  <InputFieldLabel>
                    How old they will be this birthday:
                  </InputFieldLabel>
                  <UserDetailToggleContainer>
                    {ageCount} Years
                  </UserDetailToggleContainer>
                  <UserDetailToggleButtonWrapper>
                    <UserDetailToggleButton
                      onClick={() => setAgeCount((pre) => pre + 1)}>
                      <IoMdArrowDropdownCircle />
                    </UserDetailToggleButton>
                    <UserDetailToggleButton
                      onClick={() => {
                        if (ageCount !== 1) {
                          setAgeCount((pre) => pre - 1);
                        }
                      }}>
                      <IoMdArrowDropupCircle />
                    </UserDetailToggleButton>
                  </UserDetailToggleButtonWrapper>
                </InputFieldMainContainer>
                <InputFieldMainContainer>
                  <InputFieldLabel>Gender:</InputFieldLabel>
                  <UserDetailToggleContainer>
                    {genderToggle}
                  </UserDetailToggleContainer>
                  <UserDetailToggleAge
                    onClick={() => {
                      if (genderToggle === "Male") {
                        setGenderToggle("Female");
                      } else {
                        setGenderToggle("Male");
                      }
                    }}>
                    <IoMdArrowDropdownCircle />
                  </UserDetailToggleAge>
                </InputFieldMainContainer>
                <UserDetailButtonContainer>
                  <Button
                    text="Next"
                    bgColor={theme.buttonColor}
                    textColor={theme.bodyColor}
                    border={`1px solid ${theme.buttonColor}`}
                    type="submit"
                    disabled={!(isValid && dirty)}
                  />
                </UserDetailButtonContainer>
                <ToneImageAnimation>
                  <ToneImage src={tone} alt="img" />
                </ToneImageAnimation>
                <ToneImageAnimation top="100px" left="0px">
                  <ToneImage src={yellowTone} alt="img" />
                </ToneImageAnimation>
              </FirstUserDetailContainer>
            </Form>
          );
        }}
      </Formik>
    </OpacityAnimation>
  );
};

export default FirstUserDetail;
