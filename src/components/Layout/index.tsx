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
      <main className="pt-20 px-2 overflow-y-auto w-full overflow-hidden xl:pt-20 xl:px-20">
        {children}
      </main>
    </div>
  );
};
