import {
  CheckBoxContainer,
  CheckBoxInputField,
  CheckBoxLabel,
  CheckBoxLayout,
} from "./style";

interface I_Props {
  label: string;
  id: string;
  name: string;
  value: boolean;
  setFieldValue?: any;
}

const CheckBox = ({ id, name, label, value, setFieldValue }: I_Props) => {
  return (
    <CheckBoxLayout key={id}>
      <CheckBoxContainer htmlFor={id} value={value}>
        <CheckBoxInputField
          id={id}
          type="checkbox"
          name={name}
          value={value}
          onChange={() => setFieldValue(name, !value)}
        />
      </CheckBoxContainer>
      <CheckBoxLabel>{label}</CheckBoxLabel>
    </CheckBoxLayout>
  );
};

export default CheckBox;
