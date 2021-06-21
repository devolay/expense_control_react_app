import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataValues);
  console.log(totalMax);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          value={dataPoint.value}
          maxValue={totalMax}
          month={dataPoint.month}
        />
      ))}
    </div>
  );
};

export default Chart;
