import { Button } from "react-bootstrap";
import styles from "@/styles/CreateEleBtn.module.css";

const CreateEleBtn = ({ btnTitle, btnType }) => {
  const handleButtonPress = () => {
    if (btnType === "createPod") {
      console.log(btnType, "button has been clicked");
    }
    if (btnType === "createOrder") {
      console.log(btnType, "button has been clicked");
    }
  };

  return (
    <Button className={styles.btn} onClick={handleButtonPress}>
      {btnTitle}
    </Button>
  );
};

export default CreateEleBtn;
