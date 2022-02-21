import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import styles from "@/styles/Chartie.module.css";

const Chartie = ({ orders }) => {
  // console.log
  const dates = orders.map((order) => {
    return new Date(order.created_at).toLocaleDateString("en-GB");
  });

  const onlyUniqueDates = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const uniqueDatesArray = dates.filter(onlyUniqueDates);

  console.log("below is all dates");
  console.log(dates);

  console.log("below is unique dates array");
  console.log(uniqueDatesArray);

  const firstPodSales = orders.map((order) => {
    return order.firstPodQty;
  });
  const secondPodSales = orders.map((order) => {
    return order.secondPodQty;
  });

  const xAndYObjectsForFirstPod = orders.map((order) => {
    return {
      x: new Date(order.created_at).toLocaleDateString("en-GB"),
      y: order.firstPodQty,
    };
  });

  const xAndYObjectsForSecondPod = orders.map((order) => {
    return {
      x: new Date(order.created_at).toLocaleDateString("en-GB"),
      y: order.secondPodQty,
    };
  });

  console.log("below is xandyobjects FIRST");
  console.log(xAndYObjectsForFirstPod);
  console.log("below is xandyobjects SECOND");
  console.log(xAndYObjectsForSecondPod);

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
        data: xAndYObjectsForFirstPod,
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
        data: xAndYObjectsForSecondPod,
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
