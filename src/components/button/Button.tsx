import { ButtonContainer } from "./style";

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
}: I_Props) => {
  return (
    <ButtonContainer
      type={type}
      disabled={disabled}
      bgColor={bgColor}
      border={border}
      textColor={textColor}
      onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
