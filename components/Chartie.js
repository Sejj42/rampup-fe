import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styles from "@/styles/Chartie.module.css";

const Chartie = ({ orders }) => {
  const dates = orders.map((order) => {
    return new Date(order.created_at).toLocaleDateString("en-GB");
  });

  const onlyUniqueDates = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const uniqueDatesArray = dates.filter(onlyUniqueDates).reverse();

  const firstPodSingleDaySalesTheFunction = () => {
    const arrayOfTotalSalesPerDayFirstPod = uniqueDatesArray.map((date) => {
      let firstPodSingleDaySales = 0;
      orders.forEach((order) => {
        if (new Date(order.created_at).toLocaleDateString("en-GB") === date) {
          firstPodSingleDaySales += order.firstPodQty;
        }
      });
      return firstPodSingleDaySales;
    });
    return arrayOfTotalSalesPerDayFirstPod;
  };

  const secondPodSingleDaySalesTheFunction = () => {
    const arrayOfTotalSalesPerDaySecondPod = uniqueDatesArray.map((date) => {
      let secondPodSingleDaySales = 0;
      orders.forEach((order) => {
        if (new Date(order.created_at).toLocaleDateString("en-GB") === date) {
          secondPodSingleDaySales += order.secondPodQty;
        }
      });
      return secondPodSingleDaySales;
    });
    return arrayOfTotalSalesPerDaySecondPod;
  };
  const data = {
    labels: uniqueDatesArray,
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
        data: firstPodSingleDaySalesTheFunction(),
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
        data: secondPodSingleDaySalesTheFunction(),
      },
    ],
  };
  return (
    <>
      <div className={styles.chartieContainer}>
        <Line data={data} width={600} height={300} />
      </div>
    </>
  );
};

export default Chartie;
