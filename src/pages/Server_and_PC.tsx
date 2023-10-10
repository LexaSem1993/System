import React from "react";
import { EnhancedTable } from "../components/EnhanceTable";
import { Search } from "../components/Search";

export const Server_and_PC = () => {
  return (
    <div className="container-table">
      <Search />
      <EnhancedTable />
    </div>
  );
};
