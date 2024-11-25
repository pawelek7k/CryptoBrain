import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "../pages/Coin";
import Home from "../pages/Home";

export const RouterIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};
