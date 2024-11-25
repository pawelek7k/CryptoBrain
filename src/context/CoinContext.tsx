import { createContext, useState } from "react";
import type { ChildrenType } from "../../types/children.d.ts";

export const CoinContext = createContext({});

const CoinContextProvider = ({ children }: ChildrenType) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {};

  const contextValue = {};

  return (
    <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>
  );
};

export default CoinContextProvider;
