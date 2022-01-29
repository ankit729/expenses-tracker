import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";
  if (props.totalValue > 0) {
    barFillHeight = Math.round((props.value / props.totalValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar_label">{props.value}</div>
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
