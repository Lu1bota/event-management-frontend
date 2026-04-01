import { Field, Input } from "@chakra-ui/react";
import type { FC } from "react";
import type {
  ChakraFieldErrorTextProps,
  ChakraFieldLabelProps,
  ChakraFieldRootProps,
  ChakraInputProps,
} from "../../../types";

interface InputProps {
  labelName?: string;
  isErrorTextVisible?: boolean;
  errorText?: string;
  inputProps?: ChakraInputProps;
  fieldRootProps?: ChakraFieldRootProps;
  fieldLabelProps?: ChakraFieldLabelProps;
  fieldErrorTextProps?: ChakraFieldErrorTextProps;
}

const CustomInput: FC<InputProps> = ({
  labelName,
  inputProps,
  isErrorTextVisible,
  errorText,
  fieldRootProps,
  fieldLabelProps,
  fieldErrorTextProps,
}) => {
  return (
    <Field.Root {...fieldRootProps}>
      <Field.Label {...fieldLabelProps}>
        {labelName} <Field.RequiredIndicator />
      </Field.Label>
      <Input rounded="md" size="md" {...inputProps} />
      {isErrorTextVisible && (
        <Field.ErrorText {...fieldErrorTextProps}>{errorText}</Field.ErrorText>
      )}
    </Field.Root>
  );
};

export default CustomInput;
