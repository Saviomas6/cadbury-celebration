import InputPinField from "../inputPinField/InputPinField";
import {
  ConfirmModalButtonContainer,
  ConfirmPinContainer,
  ModalContainer,
  ModalHeading,
  ModalMainContainer,
  ResendOTPText,
} from "./style";
import Button from "../button/Button";
import { theme } from "../../styles/theme";

interface I_Props {
  toggleModal(value: boolean): void;
  setConfirmWalletPin(value: string): void;
  authInputRef: any;
  confirmWalletPin?: any;
  setIsLoggedIn(value: boolean): void;
}

const OTPModal = ({
  toggleModal,
  setConfirmWalletPin,
  authInputRef,
  confirmWalletPin,
  setIsLoggedIn,
}: I_Props) => {
  const handleOnChange = (res: string) => {
    setConfirmWalletPin(res);
  };

  const handleOutSideClick = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal(false);
    }
  };

  const handlePinSubmit = () => {
    if (confirmWalletPin === "1234") {
      alert("Successfully Logged in");
      setIsLoggedIn(true);
      toggleModal(false);
    } else {
      alert("Incorrect Pin");
      authInputRef?.current?.clear();
    }
  };

  return (
    <ModalMainContainer onMouseDown={handleOutSideClick}>
      <ModalContainer>
        <ModalHeading>Enter OTP</ModalHeading>
        <ConfirmPinContainer>
          <InputPinField
            authInputRef={authInputRef}
            handleOnChange={handleOnChange}
          />
        </ConfirmPinContainer>
        <ResendOTPText>Resend OTP</ResendOTPText>
        <ConfirmModalButtonContainer>
          <Button
            text="Submit"
            bgColor={theme.buttonColor}
            textColor={theme.bodyColor}
            border={`1px solid ${theme.buttonColor}`}
            type="button"
            onClick={handlePinSubmit}
            disabled={confirmWalletPin?.length !== 4}
          />
        </ConfirmModalButtonContainer>
      </ModalContainer>
    </ModalMainContainer>
  );
};

export default OTPModal;
