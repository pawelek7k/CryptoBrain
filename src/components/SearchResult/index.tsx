import { useContext, useEffect, useState } from "react";
import { CoinType } from "../../../types/coin";
import { CoinContext } from "../../context/CoinContext";
import { useSearchContext } from "../../context/SearchContext";

export const SearchResult = () => {
  const { input } = useSearchContext();
  const { allCoin } = useContext(CoinContext);
  const [filteredCoins, setFilteredCoins] = useState<CoinType[]>([]);

  useEffect(() => {
    if (input) {
      setFilteredCoins(
        allCoin.filter((coin) =>
          coin.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setFilteredCoins([]);
    }
  }, [input, allCoin]);

  return (
    <div>
      <h2 className="text-3xl font-semibold">Search Results</h2>
      <div className="w-full">
        <ul className="flex flex-col gap-2 w-full">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => (
              <li
                key={coin.id}
                className="flex items-center gap-4 hover:bg-zinc-900 rounded-md px-4 py-2 cursor-pointer"
              >
                <img src={coin.image} alt={coin.name} width={30} height={30} />
                <p>{coin.name}</p>
              </li>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
