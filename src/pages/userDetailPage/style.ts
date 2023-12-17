import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Field } from "formik";

export const FirstUserDetailContainer = styled.div`
  padding: 20px 0;
`;

export const FirstUserDetailImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstUserDetailImageContainer = styled.div`
  height: 200px;
  width: 200px;
`;
export const FirstUserDetailImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: flex;
`;

export const InputFieldMainContainer = styled.div`
  position: relative;
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

export const UserDetailButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 130px;
  justify-content: center;
  margin: 20px 0;
`;

export const UserDetailToggleContainer = styled.div`
  height: 40px;
  width: 100%;
  padding: 0 20px;
  background-color: ${theme.white};
  color: ${theme.black};
  font-size: 16px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

export const UserDetailToggleButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 32px;
  right: 10px;
  color: ${theme.bodyColor};
`;

export const UserDetailToggleButton = styled.div`
  font-size: 30px;
`;

export const UserDetailToggleAge = styled.div`
  position: absolute;
  top: 32px;
  right: 10px;
  color: ${theme.bodyColor};
  font-size: 30px;
`;

export const SelectBoxMainWrapper = styled.div`
  margin-top: 10px;
`;
