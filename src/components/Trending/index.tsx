import { useEffect, useState } from "react";
import { fetchTrendingData } from "../../utils/api";
import { Loading } from "../Loading";

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
        <div className="mt-4 lg:mt-10">
          <ul className="grid grid-cols-5 gap-4 border-2 border-zinc-900 rounded-md p-4 lg:grid-cols-1 lg:w-80 lg:gap-2">
            {trendingData.coins.slice(0, 10).map((coin, index: number) => (
              <li
                key={index}
                className="flex flex-col lg:flex-row  items-center text-center map-item"
              >
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  width={30}
                  height={30}
                />
                <p className="text-xs mt-1">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
