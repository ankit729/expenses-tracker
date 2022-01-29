import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const totalValue = props.dataPoints.reduce(
    (acc, dataPoint) => acc + dataPoint.value,
    0
  );
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
