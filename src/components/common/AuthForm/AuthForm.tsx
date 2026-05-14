import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Formik, Form as FormikForm } from "formik";
import type { FC, ReactNode } from "react";
import * as Yup from "yup";
import type { LoginRequest, RegisterRequest } from "../../../types";
import { CustomInput } from "../CustomInput";
import { CustomPasswordInput } from "../CustomPasswordInput";
import { fieldShouldShowError, getInitialValues } from "../../../utils";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const registerSchema = loginSchema.shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
});

export type AuthFormVariant = "login" | "register";
export type AuthFormValues = LoginRequest &
  Partial<Pick<RegisterRequest, "name">>;

type AuthFormBaseProps = {
  title?: string;
  submitLabel?: string;
  footer?: ReactNode;
};

export type AuthFormProps =
  | (AuthFormBaseProps & {
      variant: "login";
      onSubmit: (values: LoginRequest) => void | Promise<void>;
    })
  | (AuthFormBaseProps & {
      variant: "register";
      onSubmit: (values: RegisterRequest) => void | Promise<void>;
    });

const getValidationSchema = (variant: AuthFormVariant) =>
  variant === "register" ? registerSchema : loginSchema;

const AuthForm: FC<AuthFormProps> = (props) => {
  const { variant, title, submitLabel, footer } = props;
  const defaultTitle = variant === "login" ? "Log in" : "Create account";
  const defaultSubmit = variant === "login" ? "Log in" : "Sign up";

  return (
    <Formik<AuthFormValues>
      initialValues={getInitialValues(variant)}
      validationSchema={getValidationSchema(variant)}
      enableReinitialize
      onSubmit={async (values) => {
        if (props.variant === "login") {
          await props.onSubmit(values);
        } else {
          await props.onSubmit(values as RegisterRequest);
        }
      }}
    >
      {({
        errors,
        touched,
        isSubmitting,
        submitCount,
        getFieldProps,
        handleSubmit,
      }) => (
        <FormikForm onSubmit={handleSubmit} noValidate>
          <VStack align="stretch" gap={8}>
            <VStack align="stretch" gap={1}>
              <Heading as="h1" size="xl" fontWeight="bold" color="fg">
                {title ?? defaultTitle}
              </Heading>
              {footer && (
                <Text as="div" fontSize="sm" color="fg.muted">
                  {footer}
                </Text>
              )}
            </VStack>
            <VStack align="stretch" gap={4}>
              {variant === "register" && (
                <CustomInput
                  labelName="Name"
                  isErrorTextVisible={fieldShouldShowError(
                    errors.name,
                    touched.name,
                    submitCount,
                  )}
                  errorText={errors.name}
                  fieldRootProps={{
                    invalid: fieldShouldShowError(
                      errors.name,
                      touched.name,
                      submitCount,
                    ),
                  }}
                  inputProps={{
                    ...getFieldProps("name"),
                    type: "text",
                    autoComplete: "name",
                    placeholder: "Your name",
                  }}
                />
              )}
              <CustomInput
                labelName="Email"
                isErrorTextVisible={fieldShouldShowError(
                  errors.email,
                  touched.email,
                  submitCount,
                )}
                errorText={errors.email}
                fieldRootProps={{
                  invalid: fieldShouldShowError(
                    errors.email,
                    touched.email,
                    submitCount,
                  ),
                }}
                inputProps={{
                  ...getFieldProps("email"),
                  type: "email",
                  autoComplete: "email",
                  placeholder: "you@example.com",
                }}
              />
              <CustomPasswordInput
                isErrorTextVisible={fieldShouldShowError(
                  errors.password,
                  touched.password,
                  submitCount,
                )}
                errorText={errors.password}
                fieldRootProps={{
                  invalid: fieldShouldShowError(
                    errors.password,
                    touched.password,
                    submitCount,
                  ),
                }}
                inputProps={{
                  ...getFieldProps("password"),
                  type: "password",
                  autoComplete:
                    variant === "login" ? "current-password" : "new-password",
                  placeholder: "Enter your password",
                }}
              />
            </VStack>
            <Button
              type="submit"
              loading={isSubmitting}
              width="full"
              size="lg"
              colorPalette="purple"
              rounded="md"
            >
              {submitLabel ?? defaultSubmit}
            </Button>
          </VStack>
        </FormikForm>
      )}
    </Formik>
  );
};

export default AuthForm;
