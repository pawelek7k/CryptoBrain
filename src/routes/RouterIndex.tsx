import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import Coin from "../pages/Coin";
import Home from "../pages/Home";

export const RouterIndex = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};
