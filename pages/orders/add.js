import styles from "@/styles/AddOrderPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import PageTitle from "@/components/PageTitle";

const AddOrderPage = () => {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [totalQty, setTotalQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const router = useRouter();

  const handleSubmit = async (e) => {
    const orderObject = {
      customerFirstName,
      customerLastName,
      totalQty,
      price,
      shippingCost,
    };

    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderObject),
    });
    console.log("below is console log of res in add order");
    console.log(res);
    if (!res.ok) {
      toast.error("Something went wrong.");
    } else {
      toast.success("Order logged successfully.");
      const orders = await res.json();
      router.push("/orders");
    }
  };

  return (
    <div className={styles.container}>
      <PageTitle bigTitle="Log New Order" subTitle="Yes" />
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="customerFirstName">Customer First Name</label>
            <input
              type="text"
              name="customerFirstName"
              id="customerFirstName"
              value={customerFirstName}
              onChange={(e) => setCustomerFirstName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="customerLastName">Customer Last Name</label>
            <input
              type="text"
              name="customerLastName"
              id="customerLastName"
              value={customerLastName}
              onChange={(e) => setCustomerLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="totalQty">Total Quantity</label>
            <input
              type="number"
              name="totalQty"
              id="totalQty"
              value={totalQty}
              onChange={(e) => setTotalQty(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Total $ Items Sum</label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shippingCost">$ Shipping Cost</label>
            <input
              type="number"
              name="shippingCost"
              id="shippingCost"
              value={shippingCost}
              onChange={(e) => setShippingCost(e.target.value)}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Log the order"
          className={styles.orderSubmitBtn}
        />
      </form>
    </div>
  );
};

export default AddOrderPage;
