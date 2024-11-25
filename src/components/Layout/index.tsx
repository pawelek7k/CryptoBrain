import React from "react";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <Sidebar />
      <main className="pt-40 px-20 overflow-y-auto">{children}</main>
    </div>
  );
};
