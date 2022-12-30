import { formInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <formInputLabel shrink={otherProps.value.length}>
          {label}
        </formInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
