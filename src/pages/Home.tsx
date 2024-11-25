import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { CoinType } from "../../types/coin.d.ts";
import { CoinContext } from "../context/CoinContext";

const HomePage = () => {
  const { allCoin } = useContext(CoinContext) as {
    allCoin: CoinType[];
    currency: { name: string; symbol: string };
  };
  const [displayCoin, setDisplayCoin] = useState<CoinType[]>([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div>
      {displayCoin.slice(0, 10).map((item, index) => (
        <Link to={`/coin/${item.id}`} key={index}>
          <p>{item.name}</p>
          <img src={item.image} alt="" width={30} height={30} />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
