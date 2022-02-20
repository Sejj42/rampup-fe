import styles from "@/styles/OrderListItem.module.css";
const OrderListItem = ({ order }) => {
  console.log(order);
  return (
    <div className={styles.container}>
      <div>{order.id}</div>
      <div>
        {order.customerFirstName} {order.customerLastName}
      </div>
      <div>{new Date(order.created_at).toLocaleDateString("en-GB")}</div>
      <div>{order.totalQty}</div>
      <div>${order.price}</div>
      <div>${order.shippingCost}</div>
    </div>
  );
};

export default OrderListItem;
