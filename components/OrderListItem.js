import styles from "@/styles/OrderListItem.module.css";
import OrderUtilityBtn from "./OrderUtilBtn";
import UtilityBtn from "./UtilityBtn";
const OrderListItem = ({ order }) => {
  console.log(order);
  return (
    <div className={styles.container}>
      <div className={styles.leftPart}>
        <div>#{order.id}</div>
        <div className={styles.customerName}>
          {order.customerFirstName} {order.customerLastName}
        </div>
      </div>
      <div className={styles.rightPart}>
        <div>{new Date(order.created_at).toLocaleDateString("en-GB")}</div>
        <div>{order.totalQty}</div>
        <div>${order.price}</div>
        <div>${order.shippingCost}</div>
        <OrderUtilityBtn
          utility="Delete"
          imgsrc="/trash_icon.png"
          alttext="trashIcon"
          bgcolor="#ff5151"
          orderid={order.id}
        />
      </div>
    </div>
  );
};

export default OrderListItem;
