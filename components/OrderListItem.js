import styles from "@/styles/OrderListItem.module.css";
const OrderListItem = ({ order }) => {
  return (
    <div className={styles.container}>
      <span>{order.id}</span>
      <span>
        {order.customerFirstName} {order.customerLastName}
      </span>
      <span>{order.createdAt}</span>
      <span>{order.totalQty}</span>
      <span>${order.price}</span>
      <span>${order.shippingCost}</span>
    </div>
  );
};

export default OrderListItem;
