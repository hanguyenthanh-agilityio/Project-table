import { useState, useCallback } from "react";
import { memo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { Table as TableChakra, TableContainer } from "@chakra-ui/react";
import { HeaderList, Project } from "@/types";

interface TableProp {
  headerList: HeaderList[];
  projects: Project[];
}

const Table = memo<TableProp>(({ headerList, projects }: TableProp) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortedProjects = [...projects].sort((a, b) => {
    // No sorting if no column is selected
    if (!sortColumn) return 0;

    const aValue = a[sortColumn as keyof Project];
    const bValue = b[sortColumn as keyof Project];

    if (aValue === undefined) return sortDirection === "asc" ? 1 : -1;
    if (bValue === undefined) return sortDirection === "asc" ? -1 : 1;

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;

    return 0;
  });

  const handleSort = useCallback(
    (column: string) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
    },
    [sortColumn, sortDirection],
  );

  return (
    <TableContainer>
      <TableChakra>
        <TableHeader
          headerList={headerList}
          onSort={handleSort}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
        />
        <TableBody projects={sortedProjects} />
      </TableChakra>
    </TableContainer>
  );
});

export default Table;
