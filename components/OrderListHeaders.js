import styles from "@/styles/OrderListHeaders.module.css";

const OrderListHeaders = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPart}>
        <div>Order ID</div>
        <div>Buyer&apos;s Name</div>
      </div>
      <div className={styles.rightPart}>
        <div>Purchase Date</div>
        <div>Quantity</div>
        <div>Items Sum </div>
        <div>Shipping Cost</div>
      </div>
    </div>
  );
};

export default OrderListHeaders;
