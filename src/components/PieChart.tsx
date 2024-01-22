import Chart from "react-google-charts";
import "../components/css/piechart.css";
import chroma from 'chroma-js';
export const data = ["Price", "Price Calculation"];


function PieChart(answers: any[]) {
  const chartData = answers.map((answer) => [answer.category, answer.price]);

  const calculateTotal = () => {
    return answers.reduce((total, answer) => total + answer.price, 0);
  };
  const baseColor = chroma(localStorage.getItem('selectedColor') || "#000000");
const palette = chroma.scale([baseColor.brighten(2).hex(), baseColor.hex(), baseColor.darken(2).hex()]).mode('lch').colors(16).slice(4,12).sort(() => Math.random() - 0.5);
  const options = {
    pieHole: 0.4,
    legend: "none",
    pieSliceText: "label",
    colors: palette,
    tooltip: {
      text: "value",
    },
    pieSliceTextStyle: {
      color: "#ffffff",
    },
  };

  let returnData = (
    <div className="pie-chart-container">
      <Chart
        chartType="PieChart"
        data={[data, ...chartData]}
        options={options}
        width={"100%"}
        height={"600px"}
        className="pie-chart"
      />
      <div className="total-value">
        <p>Totale prijs: {calculateTotal()}$</p>
      </div>
    </div>
  );
  console.log(returnData);
  return returnData;

}

export default PieChart;
