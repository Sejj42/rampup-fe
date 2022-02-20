import OrderList from "@/components/OrderList";
import PageTitle from "@/components/PageTitle";
import styles from "@/styles/OrdersPage.module.css";

import { API_URL } from "../../config";

const OrdersPage = ({ orders }) => {
  console.log(orders);
  return (
    <>
      <div className={styles.container}>
        <PageTitle
          bigTitle="Orders"
          subTitle="This page is used to display all recent orders and an analytical graph"
          btnTitle="+ Log Order"
          btnType="createOrder"
        />

        <PageTitle
          bigTitle="List of Orders"
          subTitle="Orders made, sorted by date descending"
        />
        <OrderList orders={orders} />
      </div>
    </>
  );
};

export default OrdersPage;

const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/orders`);
  const orders = await res.json();

  return {
    props: {
      orders,
    },
  };
};

export { getServerSideProps };
