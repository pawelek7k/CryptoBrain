import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import type { CoinType } from "../../types/coin.d.ts";
import { CoinContext } from "../context/CoinContext";

const HomePage = () => {
  const { allCoin, currency } = useContext(CoinContext) as {
    allCoin: CoinType[];
    currency: { name: string; symbol: string };
  };
  const [displayCoin, setDisplayCoin] = useState<CoinType[]>([]);
  const [input, setInput] = useState<string>("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value.trim() === "") setDisplayCoin(allCoin);
  };

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredCoins = allCoin.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div>
      <form action="" onSubmit={searchHandler}>
        <input type="text" onChange={inputHandler} required value={input} />
        <button>Search</button>
      </form>
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
