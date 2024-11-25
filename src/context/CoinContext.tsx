import { createContext } from "react";
import type { ChildrenType } from "../../types/children.d.ts";

export const CoinContext = createContext({});

const CoinContextProvider = ({ children }: ChildrenType) => {
  const contextValue = {};

  return (
    <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>
  );
};

export default CoinContextProvider;
