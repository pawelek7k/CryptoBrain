import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { CoinType } from "../../types/coin";
import { CoinContext } from "../context/CoinContext";
import { fetchCoinData, fetchHistoricalData } from "../utils/api";
import { chartOptions, prepareChartData } from "../utils/chartUtils";

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
  console.log(coinData);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-8">
        <h1 className="heading">{coinData.name}</h1>-
        <p>{coinData.symbol.toUpperCase()}</p>
      </div>
      <span className="text-sm text-zinc-600">{coinData.genesis_date}</span>
      <ul className="flex gap-2 flex-wrap">
        {coinData.categories.length > 0 ? (
          coinData.categories.map((item: string, index: number) => (
            <li
              key={index}
              className="bg-yellow-950 rounded-md px-2 hover:bg-yellow-900 ease-in-out cursor-default transition items-center "
            >
              {item}
            </li>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
      <h2 className="heading text-xl">Historical Data (Last 10 Days)</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default CoinPage;
