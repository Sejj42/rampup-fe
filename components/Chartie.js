import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styles from "@/styles/Chartie.module.css";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Green Smoothie Pod",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 55, 56, 65, 76, 80, 95],
    },
    {
      label: "White Choclate Pod",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#FFD700",
      borderColor: "rgba(255,215,0,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#FFD700",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#FFD700",
      pointHoverBorderColor: "#FFD700",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [42, 31, 38, 47, 56, 62, 78],
    },
  ],
};

const Chartie = () => (
  <div className={styles.chartieContainer}>
    <Line data={data} width={600} height={300} />
  </div>
);

export default Chartie;
