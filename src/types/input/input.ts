import { Field, Input } from "@chakra-ui/react";
import type React from "react";

export type ChakraInputProps = React.ComponentProps<typeof Input>;
export type ChakraFieldRootProps = React.ComponentProps<typeof Field.Root>;
export type ChakraFieldLabelProps = React.ComponentProps<typeof Field.Label>;
export type ChakraFieldErrorTextProps = React.ComponentProps<
  typeof Field.ErrorText
>;
