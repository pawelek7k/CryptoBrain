import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import Coin from "../pages/Coin";
import Home from "../pages/Home";

export const RouterIndex = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
