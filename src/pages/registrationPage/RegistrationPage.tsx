import { Form, Formik } from "formik";
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
} from "../../styles/sharedStyle";
import Celebration from "../../assets/images/Celebration.png";
import Button from "../../components/button/Button";
import { theme } from "../../styles/theme";
import { useRef, useState } from "react";
import OTPModal from "../../components/otpModal/OTPModal";
import { AuthCodeRef } from "react-auth-code-input";
import tone from "../../assets/images/Yellow tone.png";
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
      <Formik initialValues={initialValue} onSubmit={handleFormSubmit}>
        {({ values, setFieldValue }) => {
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
                        values.phoneNo
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
