import React from "react";
import { EnhancedTable } from "../components/EnhanceTable/EnhancedTable";
import { Search } from "../components/Search";

export const Server_and_PC = () => {
  return (
    <div className="container-table">
      <Search />
      <EnhancedTable />
    </div>
  );
};
