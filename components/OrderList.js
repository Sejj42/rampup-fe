import styles from "@/styles/OrderList.module.css";
import OrderListHeaders from "./OrderListHeaders";
import OrderListItem from "./OrderListItem";

const OrderList = ({ orders }) => {
  console.log("hi");
  console.log(orders);
  return (
    <div className={styles.container}>
      <OrderListHeaders />
      <div className={styles.hr}></div>
      <div className={styles.listContainer}>
        {orders.map((order) => (
          <OrderListItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
