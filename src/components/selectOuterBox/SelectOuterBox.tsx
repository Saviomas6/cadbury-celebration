import React from "react";
import {
  SelectOuterBoxContainer,
  SelectOuterBoxContent,
  SelectOuterBoxHeading,
} from "./style";

interface I_Props {
  children: React.ReactNode;
  heading: string;
}

const SelectOuterBox = ({ children, heading }: I_Props) => {
  return (
    <SelectOuterBoxContainer>
      <SelectOuterBoxHeading>{heading}</SelectOuterBoxHeading>
      <SelectOuterBoxContent>{children}</SelectOuterBoxContent>
    </SelectOuterBoxContainer>
  );
};

export default SelectOuterBox;
