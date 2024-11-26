import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <h2 className="heading">Search Results</h2>
      <div className="w-full mt-4">
        <ul className="flex flex-col gap-2 w-full">
          {filteredCoins.map((item, index) => (
            <li
              key={index}
              className="hover:bg-zinc-900 rounded-md px-4 py-2 cursor-pointer "
            >
              <Link to={`/coin/${item.id}`}>
                <div className="flex items-center hover:bg-zinc-900 rounded-md px-4 py-2 cursor-pointer justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={30}
                      height={30}
                    />
                    <p className="font-semibold">{item.name}</p>
                  </div>
                  <p>{item.symbol.toUpperCase()}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
