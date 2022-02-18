import styles from "@/styles/PageTitle.module.css";
import CreateEleBtn from "./CreateEleBtn";
const PageTitle = ({ bigTitle, subTitle, btnTitle, btnType }) => {
  return (
    <>
      <div className={styles.titleDiv}>
        <div>
          <h1 className={styles.bigTitle}>{bigTitle}</h1>
          <h3 className={styles.subTitle}>{subTitle}</h3>
        </div>
        <CreateEleBtn btnTitle={btnTitle} btnType={btnType} />
      </div>
      <div className={styles.hr}></div>
    </>
  );
};

export default PageTitle;
