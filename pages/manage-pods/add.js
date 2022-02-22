import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/AddPodPage.module.css";
import PageTitle from "@/components/PageTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "@/config/index";

const CreatePodPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [weightInG, setWeightInG] = useState(0);
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState(0);
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [cholesterol, setCholesterol] = useState(0);
  const [totalFats, setTotalFats] = useState(0);

  const router = useRouter();
  const handleSubmit = async (e) => {
    const podObject = {
      name,
      description,
      weightInG,
      color,
      brand,
      imageURL,
      price,
      calories,
      protein,
      sugar,
      carbohydrates,
      sodium,
      cholesterol,
      totalFats,
    };

    const res = await fetch(`${API_URL}/pods`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(podObject),
    });
    console.log(res);
    if (!res.ok) {
      toast.error("Something went wrong.");
    } else {
      toast.success("Pod added successfully.");
      const pods = await res.json();
      router.push("/manage-pods");
    }
  };

  return (
    <div className={styles.container}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="weightInG">Weight</label>
            <input
              type="number"
              name="weightInG"
              id="weightInG"
              value={weightInG}
              onChange={(e) => setWeightInG(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input
              type="text"
              name="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="imageURL">Image URL</label>
            <input
              type="url"
              name="imageURL"
              id="imageURL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              name="calories"
              id="calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="protein">Protein</label>
            <input
              type="number"
              name="protein"
              id="protein"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="sugar">Sugar</label>
            <input
              type="number"
              name="sugar"
              id="sugar"
              value={sugar}
              onChange={(e) => setSugar(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="carbohydrates">Carbohydrates</label>
            <input
              type="number"
              name="carbohydrates"
              id="carbohydrates"
              value={carbohydrates}
              onChange={(e) => setCarbohydrates(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="sodium">Sodium</label>
            <input
              type="number"
              name="sodium"
              id="sodium"
              value={sodium}
              onChange={(e) => setSodium(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cholesterol">Cholesterol</label>
            <input
              type="number"
              name="cholesterol"
              id="cholesterol"
              value={cholesterol}
              onChange={(e) => setCholesterol(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="totalfats">Total Fats</label>
            <input
              type="number"
              name="totalfats"
              id="totalfats"
              value={totalFats}
              onChange={(e) => setTotalFats(e.target.value)}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Submit New Pod"
          className={styles.podSubmitBtn}
        />
      </form>
    </div>
  );
};

export default CreatePodPage;
