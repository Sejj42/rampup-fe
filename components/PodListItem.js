import styles from "@/styles/PodListItem.module.css";
import Image from "next/image";
import UtilityBtn from "./UtilityBtn";

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
          <UtilityBtn
            utility="Edit"
            imgsrc="/edit_icon.png"
            alttext="editIcon"
            bgcolor="#519cff"
            podid={pod.id}
          />
          <UtilityBtn
            utility="Delete"
            imgsrc="/trash_icon.png"
            alttext="trashIcon"
            bgcolor="#ff5151"
            podid={pod.id}
          />
        </div>
      </div>
    </div>
  );
};

export default PodListItem;
