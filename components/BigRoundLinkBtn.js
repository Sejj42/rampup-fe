import styles from "@/styles/BigRoundLinkBtn.module.css";
import Link from "next/link";
const BigRoundLinkBtn = ({ text, linkTo }) => {
  return (
    <div>
      <Link href={linkTo} passHref>
        <div className={styles.btnContainer}>
          <div className={styles.btnText}>{text}</div>
        </div>
      </Link>
    </div>
  );
};

export default BigRoundLinkBtn;
