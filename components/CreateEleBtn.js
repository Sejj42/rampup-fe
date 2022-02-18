import { Button } from "react-bootstrap";
import styles from "@/styles/CreateEleBtn.module.css";
import Link from "next/link";

const CreateEleBtn = ({ btnTitle, btnType }) => {
  return (
    <>
      {btnType === "createPod" && (
        <Link href="/manage-pods/add" passHref>
          <Button className={styles.btn}>{btnTitle}</Button>
        </Link>
      )}
      {btnType === "createOrder" && (
        <Link href="/orders/add" passHref>
          <Button className={styles.btn}>{btnTitle}</Button>
        </Link>
      )}
    </>
  );
};

export default CreateEleBtn;
