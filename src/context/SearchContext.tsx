import { createContext, ReactNode, useContext, useState } from "react";

interface SearchContextType {
  input: string;
  setInput: (input: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [input, setInput] = useState<string>("");

  return (
    <SearchContext.Provider value={{ input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};
