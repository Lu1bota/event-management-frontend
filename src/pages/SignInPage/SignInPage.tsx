import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthForm, AuthPageLayout } from "../../components/common";
import { useLogin } from "../../queries";
import type { LoginRequest } from "../../types";

const SignInPage = () => {
  const { mutate } = useLogin();

  const handleSubmit = (loginData: LoginRequest) => mutate(loginData);

  return (
    <AuthPageLayout>
      <AuthForm
        title="Log in"
        submitLabel="Log in"
        variant="login"
        onSubmit={handleSubmit}
        footer={
          <>
            Don&apos;t have an account?{" "}
            <Link to="/sign-up">
              <Text
                as="span"
                fontWeight="semibold"
                colorPalette="purple"
                _hover={{ textDecoration: "underline" }}
              >
                Sign up
              </Text>
            </Link>
          </>
        }
      />
    </AuthPageLayout>
  );
};

export default SignInPage;
