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
          <ul className="w-80 border-2 border-zinc-900 rounded-md">
            {trendingData.coins.map((coin, index: number) => (
              <li key={index} className="flex items-center gap-4 map-item">
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
