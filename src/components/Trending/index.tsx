import { useEffect, useState } from "react";

export const Trending = () => {
  const [trendingData, setTrendingData] = useState(null);

  const fetchTrendingData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.json();
      setTrendingData(data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <div>
      <h2>Trending</h2>
      {trendingData ? (
        <div>
          <ul>
            {trendingData.coins.map((coin, index: number) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  width={30}
                  height={30}
                />
                <p>
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
