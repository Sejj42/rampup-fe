import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "@/styles/OrderUtilBtn.module.css";
import Image from "next/image";
import { API_URL } from "../config/index";

const OrderUtilityBtn = ({ utility, imgsrc, alttext, bgcolor, orderid }) => {
  const deleteOrder = async (e) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/orders/${orderid}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success("Order deleted successfully.");
      }
    }
  };

  const handleButtonClick = (e) => {
    console.log(utility, "button has been pressed");
    if (utility === "Delete") {
      deleteOrder(e);
    }
  };
  return (
    <button
      className={styles.btnContainer}
      style={{ backgroundColor: bgcolor }}
      onClick={handleButtonClick}
    >
      <Image src={imgsrc} alt={alttext} width={"12px"} height={"12px"} />
    </button>
  );
};

export default OrderUtilityBtn;
