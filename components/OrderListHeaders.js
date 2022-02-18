import styles from "@/styles/OrderListHeaders.module.css";

const OrderListHeaders = () => {
  return (
    <div className={styles.container}>
      <p>
        Order ID Buyer&apos;s Name Purchase Date Quantity Total Price Shipping
        Price
      </p>
    </div>
  );
};

export default OrderListHeaders;
