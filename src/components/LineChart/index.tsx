import { useEffect, useState } from "react";
import Chart from "react-google-charts";

export const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    const dataCopy = [["Date", "Prices"]];

    if (historicalData?.prices) {
      historicalData.prices.forEach((item: [number, number]) => {
        const date = new Date(item[0]);
        dataCopy.push([date.toLocaleDateString(), item[1]]);
      });
    }

    setData(dataCopy);
  }, [historicalData]);

  return (
    <div>
      <Chart chartType="LineChart" data={data} height="100%" />
    </div>
  );
};
