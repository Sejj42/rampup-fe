import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "@/styles/UtilityBtn.module.css";
import Image from "next/image";
import { API_URL } from "../config";
import { useRouter } from "next/router";
const UtilityBtn = ({ utility, imgsrc, alttext, bgcolor, podid }) => {
  const router = useRouter();

  const deletePod = async () => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/pods/${podid}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/manage-pods");
      }
    }
  };

  const handleButtonClick = () => {
    console.log(utility, "button has been pressed");
    if (utility === "Delete") {
      deletePod();
    }
  };
  return (
    <button
      className={styles.btnContainer}
      style={{ backgroundColor: bgcolor }}
      onClick={handleButtonClick}
    >
      <Image src={imgsrc} alt={alttext} width={"25px"} height={"25px"} />
    </button>
  );
};

export default UtilityBtn;
