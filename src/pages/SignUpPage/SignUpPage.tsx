import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthForm, AuthPageLayout } from "../../components/common";
import { useRegister } from "../../queries";
import type { RegisterRequest } from "../../types";

const SignUpPage = () => {
  const { mutate } = useRegister();

  const handleSubmit = (registerData: RegisterRequest) => mutate(registerData);

  return (
    <AuthPageLayout>
      <AuthForm
        title="Create an account"
        submitLabel="Create account"
        variant="register"
        onSubmit={handleSubmit}
        footer={
          <>
            Already have an account?{" "}
            <Link to="/sign-in">
              <Text
                as="span"
                fontWeight="semibold"
                colorPalette="purple"
                _hover={{ textDecoration: "underline" }}
              >
                Log in
              </Text>
            </Link>
          </>
        }
      />
    </AuthPageLayout>
  );
};

export default SignUpPage;
