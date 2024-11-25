import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoinType } from "../../../types/coin";
import { CoinContext } from "../../context/CoinContext";

export const Sidebar = () => {
  const { allCoin } = useContext(CoinContext) as {
    allCoin: CoinType[];
    currency: { name: string; symbol: string };
  };
  const [displayCoin, setDisplayCoin] = useState<CoinType[]>([]);

  useEffect(() => {
    if (Array.isArray(allCoin)) {
      setDisplayCoin(allCoin);
    } else {
      console.error("allCoin is not an array:", allCoin);
    }
  }, [allCoin]);

  return (
    <div className="h-screen px-4 pt-20">
      {/* <h2>The most popular coins</h2> */}
      <ul className="flex-col gap-4 border-4 border-yellow-950 px-2 rounded-md w-20 flex justify-center items-center py-6">
        {Array.isArray(displayCoin) &&
          displayCoin.slice(0, 10).map((item, index) => (
            <li key={index}>
              <Link to={`/coin/${item.id}`}>
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
