import { Form, Formik } from "formik";
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
import { TextLabel } from "../../../../styles/sharedStyle";
import CapGift from "../../../../assets/images/Cap&Gift.png";
import Button from "../../../../components/button/Button";
import { theme } from "../../../../styles/theme";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { useState } from "react";

const FirstUserDetail = () => {
  const [genderToggle, setGenderToggle] = useState<string>("Male");
  const [ageCount, setAgeCount] = useState<number>(18);

  const initialValue = {};

  const handleSubmitForm = () => {};

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmitForm}>
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
              <InputField type="text" name="theirName" placeholder="Name" />
            </InputFieldContainer>
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
                onClick={() => setAgeCount((pre) => pre - 1)}>
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
  );
};

export default FirstUserDetail;
