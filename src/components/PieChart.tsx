import Chart from "react-google-charts";
import "../components/css/piechart.css"
export const data = ["Price", "Price Calculation"];

function PieChart(answers: any[]) {
  const chartData = answers.map((answer) => [answer.category, answer.price]);

  const calculateTotal = () => {
    return answers.reduce((total, answer) => total + answer.price, 0);
  };

  const options = {
    pieHole: 0.4,
    legend: "none",
    pieSliceText: "label",
    colors: ["#6AC26E", "#6AA26E", "#549957"],
    tooltip: {
      text: "value",
    },
  };

  return (
    <div className="pie-chart-container">
      <Chart
        chartType="PieChart"
        data={[data, ...chartData]}
        options={options}
        width={"100%"}
        height={"600px"}
      />
      <div className="total-value">
        <p>Totale prijs: {calculateTotal()}$</p>
      </div>
    </div>
  );
}

export default PieChart;
