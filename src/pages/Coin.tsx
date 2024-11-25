import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinType } from "../../types/coin";

const CoinPage = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState<CoinType | null>(null);

  useEffect(() => {
    if (coinId) {
      fetchCoinData(coinId);
    }
  }, [coinId]);

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

  if (!coinData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{coinData.name}</h1>
      {coinData.symbol}
    </div>
  );
};

export default CoinPage;
