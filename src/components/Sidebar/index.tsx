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
    <div className="h-screen">
      <h2>The most popular coins</h2>
      <ul>
        <li>
          {Array.isArray(displayCoin) &&
            displayCoin.slice(0, 10).map((item, index) => (
              <Link to={`/coin/${item.id}`} key={index}>
                <p>{item.name}</p>
                <img src={item.image} alt={item.name} width={30} height={30} />
              </Link>
            ))}
        </li>
      </ul>
    </div>
  );
};
