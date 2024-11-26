import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import type { GlobalMarketDataType } from "../../../types/globalMarketData";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export const GlobalMarketData = () => {
  const [globalData, setGlobalData] = useState<GlobalMarketDataType | null>(
    null
  );

  const fetchGlobalData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/global/decentralized_finance_defi"
      );
      const data = await response.json();
      setGlobalData(data?.data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  useEffect(() => {
    fetchGlobalData();
  }, []);

  if (!globalData) {
    return <div>Loading</div>;
  }

  const chartData = {
    labels: [
      "DeFi Market Cap",
      "ETH Market Cap",
      "24h Volume",
      "DeFi Dominance",
    ],
    datasets: [
      {
        label: "Global Market Data",
        data: [
          parseFloat(globalData.defi_market_cap),
          parseFloat(globalData.eth_market_cap),
          parseFloat(globalData.trading_volume_24h),
          parseFloat(globalData.defi_dominance),
        ],
        borderColor: "#422006",
        backgroundColor: "#713f12",
        borderWidth: 2,
        pointBackgroundColor: "#422006",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full px-12">
      <h2 className="heading">Global Market Data</h2>
      <Line data={chartData} options={chartOptions} className="mt-10" />
    </div>
  );
};
