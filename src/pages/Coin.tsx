import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { fetchCoinData, fetchHistoricalData } from "../utils/api";
import { prepareChartData, chartOptions } from "../utils/chartUtils";
import { CoinType } from "../../types/coin";
import { CoinContext } from "../context/CoinContext";

const CoinPage = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState<CoinType | null>(null);
  const [historicalData, setHistoricalData] = useState<any>(null);
  const { currency } = useContext(CoinContext);

  useEffect(() => {
    const fetchData = async () => {
      if (coinId) {
        const data = await fetchCoinData(coinId);
        setCoinData(data);
      }
    };
    fetchData();
  }, [coinId]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (coinId && currency) {
        const data = await fetchHistoricalData(coinId, currency.name);
        setHistoricalData(data);
      }
    };
    fetchHistory();
  }, [coinId, currency]);

  if (!coinData || !historicalData) return <div>Loading...</div>;

  const chartData = prepareChartData(historicalData, currency.symbol);

  return (
    <div>
      <h1>{coinData.name}</h1>
      <p>{coinData.symbol}</p>
      <h2>Historical Data (Last 10 Days)</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default CoinPage;
