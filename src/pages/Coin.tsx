import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinType } from "../../types/coin";
import { LineChart } from "../components/LineChart";
import { CoinContext } from "../context/CoinContext";

const CoinPage = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState<CoinType | null>(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  useEffect(() => {
    if (coinId) {
      fetchCoinData(coinId);
    }
  }, [coinId]);

  useEffect(() => {
    if (coinId && currency) {
      fetchHistoricalData();
    }
  }, [coinId, currency]);

  const fetchCoinData = async (id: string) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error("Error fetching historical data:", err);
    }
  };

  if (!coinData || !historicalData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{coinData.name}</h1>
      <p>{coinData.symbol}</p>
      <h2>Historical Data (Last 10 Days)</h2>
      <LineChart historicalData={historicalData} />
    </div>
  );
};

export default CoinPage;
