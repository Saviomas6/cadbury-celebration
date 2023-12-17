import AuthCode from 'react-auth-code-input'
import { InputPinFieldContainer } from './style'
interface I_Props {
  handleOnChange?: any
  authInputRef?: any
}
const InputPinField = ({ handleOnChange, authInputRef }: I_Props) => {
  return (
    <InputPinFieldContainer>
      <AuthCode
        length={4}
        inputClassName='input'
        allowedCharacters='numeric'
        containerClassName='container'
        onChange={handleOnChange}
        isPassword={true}
        ref={authInputRef}
      />
    </InputPinFieldContainer>
  )
}

export default InputPinField
