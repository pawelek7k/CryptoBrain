import { AnimatePresence, motion } from "framer-motion";
import { Slant as Hamburger } from "hamburger-react";
import { ChangeEvent, useContext, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Logo } from "../Logo";
import { SearchForm } from "../SearchForm";
import { SelectCurrency } from "../SelectCurrency";

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
        <SelectCurrency currencyHandler={currencyHandler} />
        <button className="primary-btn">Sign up</button>
      </div>
      <div className="md:hidden">
        <Hamburger toggle={toggleMenu} toggled={isOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-zinc-950 shadow-lg z-50 flex flex-col px-6 py-12"
          >
            <div className="flex flex-col gap-6">
              <SearchForm />
              <SelectCurrency currencyHandler={currencyHandler} />
              <button className="primary-btn">Sign up</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
