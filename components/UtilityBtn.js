import styles from "@/styles/UtilityBtn.module.css";
import Image from "next/image";
import { API_URL } from "../config";
const UtilityBtn = ({ utility, imgsrc, alttext, bgcolor, podid }) => {
  const deletePod = async (podid) => {
    const res = await fetch(`${API_URL}/pods/${podid}`, { method: "DELETE" });
  };

  const handleButtonClick = () => {
    console.log(utility, "button has been pressed");
    // if ((utility = "Delete")) {
    //   deletePod(podid);
    // }
  };
  return (
    <button
      className={[styles.btnContainer]}
      style={{ backgroundColor: bgcolor }}
      onClick={handleButtonClick}
    >
      <Image src={imgsrc} alt={alttext} width={"25px"} height={"25px"} />
    </button>
  );
};

export default UtilityBtn;
