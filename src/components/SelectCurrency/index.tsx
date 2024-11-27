import { ChangeEvent } from "react";

type SelectCurrencyType = {
  currencyHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectCurrency = ({ currencyHandler }: SelectCurrencyType) => {
  return (
    <select
      onChange={currencyHandler}
      className="bg-transparent outline-none cursor-pointer"
    >
      <option value="usd" className="bg-zinc-950">
        USD
      </option>
      <option value="eur" className="bg-zinc-950">
        EUR
      </option>
      <option value="inr" className="bg-zinc-950">
        INR
      </option>
    </select>
  );
};
