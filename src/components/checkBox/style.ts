import { Field } from "formik";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CheckBoxLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 5px;
  margin-top: 10px;
`;
export const CheckBoxLabel = styled.div`
  text-transform: capitalize;
  font-size: 12px;
`;

export const CheckBoxContainer = styled.label<any>`
  cursor: pointer;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid ${theme.white};
  background-color: ${({ value }) => (value ? theme.buttonColor : theme.white)};
  transition: all 0.2s;
`;
export const CheckBoxInputField = styled(Field)`
  display: none;
`;
