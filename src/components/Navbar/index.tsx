import { AnimatePresence, motion } from "framer-motion";
import { Slant as Hamburger } from "hamburger-react";
import { ChangeEvent, useContext, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Logo } from "../Logo";
import { SearchForm } from "../SearchForm";

export const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev: boolean) => !prev);

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
    <header className="flex p-4 items-center justify-between fixed top-0 left-0 w-full bg-zinc-950 z-50">
      <Logo />
      <div className="hidden md:flex gap-6 items-center">
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
      <Hamburger toggle={toggleMenu} toggled={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-zinc-950 shadow-lg z-50 flex flex-col px-6 py-12"
          >
            <SearchForm />
            <select
              onChange={currencyHandler}
              className="bg-transparent outline-none cursor-pointer my-4"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
