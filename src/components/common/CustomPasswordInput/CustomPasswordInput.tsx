import {
  Field,
  IconButton,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import type { FC } from "react";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import type {
  ChakraFieldErrorTextProps,
  ChakraFieldLabelProps,
  ChakraFieldRootProps,
  ChakraInputProps,
} from "../../../types";

interface CustomPasswordInputProps {
  labelName?: string;
  isErrorTextVisible?: boolean;
  errorText?: string;
  inputProps?: ChakraInputProps;
  fieldRootProps?: ChakraFieldRootProps;
  fieldLabelProps?: ChakraFieldLabelProps;
  fieldErrorTextProps?: ChakraFieldErrorTextProps;
}

const CustomPasswordInput: FC<CustomPasswordInputProps> = ({
  labelName = "Password",
  isErrorTextVisible,
  errorText,
  inputProps,
  fieldRootProps,
  fieldLabelProps,
  fieldErrorTextProps,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <Field.Root {...fieldRootProps}>
      <Field.Label {...fieldLabelProps}>
        {labelName} <Field.RequiredIndicator />
      </Field.Label>
      <InputGroup
        endElement={
          <IconButton
            type="button"
            variant="ghost"
            size="sm"
            tabIndex={-1}
            disabled={inputProps?.disabled}
            aria-label={visible ? "Hide password" : "Show password"}
            onPointerDown={(e) => {
              if (inputProps?.disabled) return;
              if (e.button !== 0) return;
              e.preventDefault();
              setVisible((v) => !v);
            }}
          >
            {visible ? <LuEyeOff size={20} /> : <LuEye size={20} />}
          </IconButton>
        }
      >
        <Input
          rounded="md"
          size="md"
          {...inputProps}
          type={visible ? "text" : "password"}
        />
      </InputGroup>
      {isErrorTextVisible && (
        <Field.ErrorText {...fieldErrorTextProps}>{errorText}</Field.ErrorText>
      )}
    </Field.Root>
  );
};

export default CustomPasswordInput;
