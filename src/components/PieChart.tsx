import Chart from "react-google-charts";
import { getValueForOption } from "./utils.tsx";

function PieChart(answers: any[]) {
  const calculateTotal = () => {
    let total = 0;
    answers.forEach((answer) => {
      const value = getValueForOption(answer);
      total += value;
    });
    return total;
  };

  const data = [
    ["Prijs", "Percentage"],
    ["Back-End", 6],
    ["Front-End", 6],
    ["Database", 4],
    ["Plugins", 2],
    ["Security", 7],
  ];

  const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    legend: "none",
    pieSliceText: "label",
    colors: ["#6AC26E", "#6AA26E", "#549957"],
  };

  return (
    <div className="pie-chart-container">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <div className="total-value">
        <p>Total Prijs: {calculateTotal()}$</p>
      </div>
    </div>
  );
}

export default PieChart;
