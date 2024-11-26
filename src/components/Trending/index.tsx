import { useEffect, useState } from "react";
import { fetchTrendingData } from "../../utils/api";

export const Trending = () => {
  const [trendingData, setTrendingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingData();
        setTrendingData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="heading">Trending</h2>
      {trendingData ? (
        <div className="mt-10">
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
