import styles from "@/styles/PageTitle.module.css";
import CreateEleBtn from "./CreateEleBtn";
const PageTitle = ({ bigTitle, subTitle, btnTitle, btnType }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <div>
            <h1 className={styles.bigTitle}>{bigTitle}</h1>
            <h2 className={styles.subTitle}>{subTitle}</h2>
          </div>
          {btnType && (
            <CreateEleBtn
              bigTitle={bigTitle}
              subtitle={subTitle}
              btnTitle={btnTitle}
              btnType={btnType}
            />
          )}
        </div>
        <div className={styles.hr}></div>
      </div>
    </>
  );
};

export default PageTitle;
