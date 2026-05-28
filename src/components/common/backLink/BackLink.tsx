import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

const BackLink = () => {
  const navigate = useNavigate();

  const handleBackLink = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <Button {...styles.backLink} onClick={handleBackLink}>
      <FaArrowLeft />
      Back
    </Button>
  );
};

export default BackLink;
