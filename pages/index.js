import styles from "@/styles/Home.module.css";
import BigRoundLinkBtn from "@/components/BigRoundLinkBtn";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        {/* <div>
          <h1>Welcome home, partner!</h1>
        </div> */}
        <div className={styles.btnsContainer}>
          <BigRoundLinkBtn text="Pods" linkTo="/manage-pods" />
          <BigRoundLinkBtn text="Orders" linkTo="/orders" />
        </div>
      </div>
    </>
  );
}
