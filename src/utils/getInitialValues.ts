import type {
  AuthFormValues,
  AuthFormVariant,
} from "../components/common/AuthForm/AuthForm";

const initialRegisterValues = { name: "", email: "", password: "" };
const initialLoginValues = { email: "", password: "" };

export const getInitialValues = (variant: AuthFormVariant): AuthFormValues =>
  variant === "register"
    ? { ...initialRegisterValues }
    : { ...initialLoginValues };
