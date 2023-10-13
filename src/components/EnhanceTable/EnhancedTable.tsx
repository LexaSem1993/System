import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { rows } from "../../store/data";
import { EnhancedTableHead } from "./components/EnhancedTableHead";
import { EnhancedTableToolbar } from "./components/EnhancedTableToolbar";
import { EnhancedTableRow } from "./components/TableRow";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store";
import { filterTable } from "../../store/serverReducer";

export function EnhancedTable() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(Number(searchParams.get("page")) || 0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(
    Number(searchParams.get("limit")) || 5
  );

  const rows = useSelector((state: IRootState) => state.rows.servers);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  useEffect(() => {
    const type = searchParams.get("endpoint_type");
    const tags = searchParams.get("endpoint_tags");
    const search = searchParams.get("search_val");
    dispatch(filterTable({ type, tags, search }));
  }, [searchParams]);

  useEffect(() => {
    if (page > 0 && visibleRows.length === 0) {
      setPage(0);
      setSearchParams((searchParams) => {
        searchParams.delete("page");
        return searchParams;
      });
    }
  }, [visibleRows, page]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setSearchParams((searchParams) => {
      newPage.toString()
        ? searchParams.set("page", newPage.toString())
        : searchParams.delete("page");
      return searchParams;
    });
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchParams((searchParams) => {
      event.target.value
        ? searchParams.set("limit", event.target.value)
        : searchParams.delete("limit");

      page == 0 ? searchParams.set("page", "0") : searchParams.delete("page");
      return searchParams;
    });
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row) => {
                return (
                  <EnhancedTableRow
                    key={row.id}
                    row={row}
                    selected={selected}
                    setSelected={setSelected}
                  />
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 45 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Количество записей"
        />
      </Paper>
    </Box>
  );
}
