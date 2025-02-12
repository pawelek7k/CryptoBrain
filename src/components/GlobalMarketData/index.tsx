import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchHistoricalData } from "../../utils/api";
import { chartOptions, prepareChartData } from "../../utils/chartUtils";
import { Loading } from "../Loading";
import type { CurrencyType } from "../../../types/currency";

export const GlobalMarketData = () => {
  const [historicalData, setHistoricalData] = useState<CurrencyType | null>(
    null
  );

  useEffect(() => {
    const fetchGlobalData = async () => {
      const data = await fetchHistoricalData("bitcoin", "usd");
      setHistoricalData(data);
    };
    fetchGlobalData();
  }, []);

  if (!historicalData) return <Loading />;

  const chartData = prepareChartData(historicalData, "$");

  return (
    <div className="w-full lg:px-2">
      <h2 className="heading">Global Market Data</h2>
      <Line data={chartData} options={chartOptions} className="mt-10" />
    </div>
  );
};
