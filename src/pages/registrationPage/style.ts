import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Field } from "formik";

export const RegistrationPageContainer = styled.div`
  /* ... */
`;
export const RegistrationPageImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegistrationPageImageContainer = styled.div`
  height: 250px;
  width: 250px;
`;
export const RegistrationPageImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;

export const InputFieldMainContainer = styled.div`
  /* ... */
`;

export const InputFieldContainer = styled.div`
  height: 40px;
`;

export const InputFieldLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.white};
  margin: 5px 0;
`;

export const InputField = styled(Field)`
  height: 100%;
  width: 100%;
  padding: 0 20px;
  background-color: ${theme.white};
  color: ${theme.black};
  font-size: 16px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const RegisterButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 130px;
  justify-content: center;
  margin: 20px 0;
`;
