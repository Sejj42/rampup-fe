import styles from "@/styles/PodListItem.module.css";
import Image from "next/image";
const PodListItem = ({ pod }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <Image
          className={styles.podImg}
          src={pod.imageURL}
          alt="pod img"
          width={"50px"}
          height={"50px"}
        />
        <div className={styles.nameAndDescDiv}>
          <h3 className={styles.podName}>{pod.name}</h3>
          <h4 className={styles.podDescription}>{pod.description}</h4>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.podPrice}>${pod.price}</div>
        <div className={styles.utilButtons}>
          <div className={styles.editBtnDiv}>
            <Image
              src="/edit_icon.png"
              alt="editIcon"
              width={"25px"}
              height={"25px"}
            />
          </div>
          <div className={styles.trashIconDiv}>
            <Image
              src="/trash_icon.png"
              alt="trashIcon"
              width={"25px"}
              height={"25px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodListItem;
