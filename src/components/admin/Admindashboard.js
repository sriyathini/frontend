import React from "react";
import "./Admindashboard.css";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function Admindashboard() {
  const pieData = {
    labels: ["Category A", "Category B", "Category C", "Category D"],
    datasets: [
      {
        data: [300, 200, 150, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barGraphData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales (in Units)",
        data: [500, 700, 400, 600],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} items`,
        },
      },
    },
  };

  const barGraphOptions = {
    indexAxis: "x",
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      x: { title: { display: true, text: "Products" } },
      y: { title: { display: true, text: "Sales (Units)" } },
    },
  };

  return (
    <div className="main-content">
      <div className="content">
        {/* First Row - Cards */}
        <div className="row card-row">
          <div className="card">Total Employees</div>
          <div className="card">Total Orders</div>
          <div className="card">Payments</div>
          <div className="card">Payment not received</div>
        </div>

        {/* Second Row - Charts */}
        <div className="row chart-row">
          <div className="chart-container small-chart">
            <div className="piechart">
            <h2>Pie Chart</h2>
            <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
          <div className="chart-container small-chart">
            <div className="bargraph">
            <h2>Bar Graph</h2>
            <Bar data={barGraphData} options={barGraphOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;

