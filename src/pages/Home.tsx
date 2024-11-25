import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";

const HomePage = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div>
      {displayCoin.slice(0, 10).map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.image} alt="" width={30} height={30} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
