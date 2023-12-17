import { ButtonContainer, LoadingContainer } from "./style";
import whiteLoading from "../../assets/images/whiteLoader.json";
import Lottie from "react-lottie";
interface I_Props {
  bgColor?: string;
  border?: string;
  onClick?(): void;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  textColor?: string;
}
const Button = ({
  bgColor,
  border,
  onClick,
  text,
  disabled,
  type,
  textColor,
  isLoading,
}: I_Props) => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: whiteLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <ButtonContainer
      type={type}
      disabled={disabled}
      bgColor={bgColor}
      border={border}
      textColor={textColor}
      onClick={onClick}>
      {isLoading ? (
        <LoadingContainer>
          <Lottie options={defaultErrorOptions} />
        </LoadingContainer>
      ) : (
        text
      )}
    </ButtonContainer>
  );
};

export default Button;
