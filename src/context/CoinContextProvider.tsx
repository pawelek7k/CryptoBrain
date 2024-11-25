import { useEffect, useState } from "react";
import type { ChildrenType } from "../../types/children";
import type { CoinType } from "../../types/coin";
import type { CurrencyType } from "../../types/currency";
import { CoinContext } from "./CoinContext";

const CoinContextProvider = ({ children }: ChildrenType) => {
  const [allCoin, setAllCoin] = useState<CoinType[]>([]);
  const [currency, setCurrency] = useState<CurrencyType>({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_X_CG_DEMO_API_KEY,
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setAllCoin(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>
  );
};

export default CoinContextProvider;
