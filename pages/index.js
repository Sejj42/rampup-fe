import styles from "@/styles/Home.module.css";
import BigRoundLinkBtn from "@/components/BigRoundLinkBtn";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <>
      <div className={styles.homeTitle}>
        <PageTitle
          bigTitle="Good to see you!"
          subTitle="What are we up to today?"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.btnsContainer}>
          <BigRoundLinkBtn text="Pods" linkTo="/manage-pods" />
          <BigRoundLinkBtn text="Orders" linkTo="/orders" />
        </div>
      </div>
    </>
  );
}
