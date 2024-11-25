import { ChangeEvent, useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Logo } from "../Logo";

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
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up</button>
      </div>
    </header>
  );
};
