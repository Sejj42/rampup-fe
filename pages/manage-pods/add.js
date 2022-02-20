import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/AddPodPage.module.css";
import PageTitle from "@/components/PageTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "@/config/index";
import axios from "axios";

const CreatePodPage = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    weightInG: 0,
    color: "",
    brand: "",
    imageURL: "",
    price: 0,
    protein: 0,
    sugar: 0,
    carbohydrates: 0,
    sodium: 0,
    cholesterol: 0,
    totalfats: 0,
  });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const hasEmptyFields = Object.values(values).some((ele) => ele === "");
    if (hasEmptyFields) {
      toast.error("Please fill in all fields.");
    }

    const data = { data: { ...values } };

    const res = await fetch(`${API_URL}/pods`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      toast.error("Something went wrong.");
    } else {
      toast.success("Pod added successfully.");
      // const pods = await res.json();
      // router.push("/manage-pods");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <PageTitle bigTitle="Create New Pod" subTitle="Yes" />
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Pod Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="weightInG">Weight</label>
            <input
              type="number"
              name="weightInG"
              id="weightInG"
              value={Number(values.weightInG)}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input
              type="text"
              name="color"
              id="color"
              value={values.color}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={values.brand}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="imageURL">Image URL</label>
            <input
              type="url"
              name="imageURL"
              id="imageURL"
              value={values.imageURL}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={values.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="protein">Protein</label>
            <input
              type="number"
              name="protein"
              id="protein"
              value={values.protein}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="sugar">Sugar</label>
            <input
              type="number"
              name="sugar"
              id="sugar"
              value={values.sugar}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="carbohydrates">Carbohydrates</label>
            <input
              type="number"
              name="carbohydrates"
              id="carbohydrates"
              value={values.carbohydrates}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="sodium">Sodium</label>
            <input
              type="number"
              name="sodium"
              id="sodium"
              value={values.sodium}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="cholesterol">Cholesterol</label>
            <input
              type="number"
              name="cholesterol"
              id="cholesterol"
              value={values.cholesterol}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="totalfats">Total Fats</label>
            <input
              type="number"
              name="totalfats"
              id="totalfats"
              value={values.totalfats}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Submit New Pod"
          className={styles.podSubmitBtn}
        />
      </form>
    </>
  );
};

export default CreatePodPage;
