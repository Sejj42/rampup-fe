import styles from "@/styles/AddOrderPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const AddOrderPage = ({ podsArray }) => {
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const [firstPodSoldQty, setFirstPodSoldQty] = useState(0);
  const [secondPodSoldQty, setSecondPodSoldQty] = useState(0);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderObject = {
      customerFirstName,
      customerLastName,
      firstPodId: podsArray[0].id,
      secondPodId: podsArray[1].id,
      firstPodQty: Number(firstPodSoldQty),
      secondPodQty: Number(secondPodSoldQty),
      firstPodPrice: Number(podsArray[0].price),
      secondPodPrice: Number(podsArray[1].price),
      totalQty: Number(firstPodSoldQty) + Number(secondPodSoldQty),
      price:
        podsArray[0].price * Number(firstPodSoldQty) +
        podsArray[1].price * Number(secondPodSoldQty),
      shippingCost: Number(shippingCost),
    };

    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderObject),
    });
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
        <div className={styles.nameInputFields}>
          <div className={styles.name}>
            <label htmlFor="customerFirstName">Customer First Name</label>
            <input
              placeholder="First Name"
              type="text"
              name="customerFirstName"
              id="customerFirstName"
              value={customerFirstName}
              onChange={(e) => setCustomerFirstName(e.target.value)}
            />
          </div>

          <div className={styles.name}>
            <label htmlFor="customerLastName">Customer Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              name="customerLastName"
              id="customerLastName"
              value={customerLastName}
              onChange={(e) => setCustomerLastName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.allPodsSalesDiv}>
          <div className={styles.podSaleInfo}>
            <span>
              <label htmlFor="firstPodSold">
                <Image
                  className={styles.podImg}
                  src={podsArray[0].imageURL}
                  alt="pod_img"
                  width={"25px"}
                  height={"25px"}
                />{" "}
                {podsArray[0].name}
              </label>
              price/pc: ${podsArray[0].price}
            </span>
            <label htmlFor="firstPodSoldQty">Quantity Sold</label>
            <input
              type="number"
              name="firstPodSoldQty"
              id="firstPodSoldQty"
              value={firstPodSoldQty}
              onChange={(e) => setFirstPodSoldQty(e.target.value)}
            />
          </div>
          <div className={styles.podSaleInfo}>
            <span>
              <label htmlFor="secondPodSold">
                <Image
                  className={styles.podImg}
                  src={podsArray[1].imageURL}
                  alt="pod_img"
                  width={"25px"}
                  height={"25px"}
                />{" "}
                {podsArray[1].name}
              </label>
              price/pc: ${podsArray[1].price}
            </span>
            <label htmlFor="secondPodSoldQty">Quantity Sold</label>
            <input
              type="number"
              name="secondPodSoldQty"
              id="secondPodSoldQty"
              value={secondPodSoldQty}
              onChange={(e) => setSecondPodSoldQty(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.shippingCostDiv}>
          <label htmlFor="shippingCost">$ Shipping Cost</label>
          <input
            type="number"
            name="shippingCost"
            id="shippingCost"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
          />
        </div>
        <div className={styles.reviewOrderDetails}>
          <br />
          <h4>See recorded order info before submission:</h4>
          <div>
            <p>
              Total Quantity for this order:{" "}
              {Number(firstPodSoldQty) + Number(secondPodSoldQty)}
            </p>
            <p>
              Total $ Items Sum for this order: $
              {firstPodSoldQty * podsArray[0].price +
                secondPodSoldQty * podsArray[1].price}
            </p>
            <p>Shipping Cost: ${shippingCost}</p>
            <p style={{ fontWeight: "bold" }}>
              ORDER TOTAL: $
              {firstPodSoldQty * podsArray[0].price +
                secondPodSoldQty * podsArray[1].price +
                Number(shippingCost)}
            </p>
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

const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/pods`);
  const podsArray = await res.json();

  return {
    props: {
      podsArray,
    },
  };
};

export { getServerSideProps };
