import { ChangeEvent, useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Logo } from "../Logo";
import { SearchForm } from "../SearchForm";

export const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    switch (value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        console.error("Unsupported currency:", value);
    }
  };

  return (
    <header className="flex p-4 items-center justify-around">
      <Logo />
      <div className="flex gap-6">
        <SearchForm />
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
        <button className="primary-btn">Sign up</button>
      </div>
    </header>
  );
};
