import { ErrorMessage, Form, Formik } from "formik";
import CheckBox from "../../components/checkBox/CheckBox";
import {
  InputField,
  InputFieldContainer,
  InputFieldLabel,
  InputFieldMainContainer,
  RegisterButtonContainer,
  RegistrationPageContainer,
  RegistrationPageImage,
  RegistrationPageImageContainer,
  RegistrationPageImageWrapper,
} from "./style";
import {
  OpacityAnimation,
  ToneImage,
  TextLabel,
  ToneImageAnimation,
  ErrorMessageText,
} from "../../styles/sharedStyle";
import Celebration from "../../assets/images/Celebration.png";
import Button from "../../components/button/Button";
import { theme } from "../../styles/theme";
import { useRef, useState } from "react";
import OTPModal from "../../components/otpModal/OTPModal";
import { AuthCodeRef } from "react-auth-code-input";
import tone from "../../assets/images/Yellow tone.png";
import * as yup from "yup";
interface I_Props {
  firstCheck: boolean;
  secondCheck: boolean;
  name: string;
  email: string;
  phoneNo: string;
}

interface I_LoginProps {
  setIsLoggedIn(value: boolean): void;
}
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "Must be at least 3 words")
    .max(20, "Must be at max 20 words")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .trim()
    .required("Email is required"),
  phoneNo: yup
    .string()
    .trim()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .max(10, "Must be at max 10 digits")
    .required("Phone number is required"),
});
const RegistrationPage = ({ setIsLoggedIn }: I_LoginProps) => {
  const [isOTPModalOpen, setIsOTPModalOpen] = useState<boolean>(false);
  const [confirmWalletPin, setConfirmWalletPin] = useState<string>("");
  const authInputRef = useRef<AuthCodeRef>(null);
  const initialValue: I_Props = {
    firstCheck: false,
    secondCheck: false,
    name: "",
    email: "",
    phoneNo: "",
  };

  const handleFormSubmit = (values: I_Props, { resetForm }: any) => {
    const { name, email, phoneNo } = values;
    const savedData: any = {
      name,
      email,
      phoneNo,
    };
    const savedDataString = JSON.stringify(savedData);
    window.localStorage.setItem("loginData", savedDataString);
    setIsOTPModalOpen(!isOTPModalOpen);
    resetForm();
  };

  return (
    <OpacityAnimation>
      <Formik
        initialValues={initialValue}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}>
        {({ values, setFieldValue, isValid, dirty }) => {
          return (
            <Form>
              <RegistrationPageContainer>
                <RegistrationPageImageWrapper>
                  <RegistrationPageImageContainer>
                    <RegistrationPageImage
                      src={Celebration}
                      alt="Celebration"
                    />
                  </RegistrationPageImageContainer>
                </RegistrationPageImageWrapper>

                <TextLabel>Register to create</TextLabel>
                <InputFieldMainContainer>
                  <InputFieldLabel>Phone Number:</InputFieldLabel>
                  <InputFieldContainer>
                    <InputField
                      type="text"
                      name="phoneNo"
                      placeholder="Phone Number"
                    />
                  </InputFieldContainer>
                  <ErrorMessageText>
                    <ErrorMessage name="phoneNo" />
                  </ErrorMessageText>
                </InputFieldMainContainer>
                <InputFieldMainContainer>
                  <InputFieldLabel>Full Name:</InputFieldLabel>
                  <InputFieldContainer>
                    <InputField
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    />
                  </InputFieldContainer>
                  <ErrorMessageText>
                    <ErrorMessage name="name" />
                  </ErrorMessageText>
                </InputFieldMainContainer>
                <InputFieldMainContainer>
                  <InputFieldLabel>Email ID:</InputFieldLabel>
                  <InputFieldContainer>
                    <InputField
                      type="text"
                      name="email"
                      placeholder="Email ID"
                    />
                  </InputFieldContainer>
                  <ErrorMessageText>
                    <ErrorMessage name="email" />
                  </ErrorMessageText>
                </InputFieldMainContainer>
                <div>
                  <CheckBox
                    id="terms"
                    label="I accept Terms & Conditions and Privacy Policy of Mondelez(Cadbury)"
                    name="firstCheck"
                    value={values.firstCheck}
                    setFieldValue={setFieldValue}
                  />
                  <CheckBox
                    id="offers"
                    label="I would like to receive promotional communication from Mondelez(Cadbury) about its products and offers."
                    name="secondCheck"
                    value={values.secondCheck}
                    setFieldValue={setFieldValue}
                  />
                </div>
                <RegisterButtonContainer>
                  <Button
                    text="Submit"
                    bgColor={theme.buttonColor}
                    textColor={theme.bodyColor}
                    border={`1px solid ${theme.buttonColor}`}
                    type="submit"
                    disabled={
                      !(
                        values.email &&
                        values.firstCheck &&
                        values.secondCheck &&
                        values.name &&
                        values.phoneNo &&
                        isValid &&
                        dirty
                      )
                    }
                  />
                </RegisterButtonContainer>
                <ToneImageAnimation>
                  <ToneImage src={tone} alt="img" />
                </ToneImageAnimation>
                <ToneImageAnimation top="100px" left="0px">
                  <ToneImage src={tone} alt="img" />
                </ToneImageAnimation>
              </RegistrationPageContainer>
            </Form>
          );
        }}
      </Formik>
      {isOTPModalOpen && (
        <OTPModal
          toggleModal={() => setIsOTPModalOpen(!isOTPModalOpen)}
          setConfirmWalletPin={setConfirmWalletPin}
          authInputRef={authInputRef}
          confirmWalletPin={confirmWalletPin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </OpacityAnimation>
  );
};

export default RegistrationPage;
