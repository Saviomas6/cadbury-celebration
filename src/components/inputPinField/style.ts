import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputPinFieldContainer = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .input {
    box-sizing: border-box;
    text-align: center;
    padding: 12px 0px;
    width: 62px;
    height: 53px;
    background: ${theme.bodyColor};
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    outline: none;
    font-size: 22px;
    font-family: "Medium";
    color: #fff;
  }
`;
