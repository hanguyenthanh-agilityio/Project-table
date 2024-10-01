import { useState, useCallback } from "react";
import { memo } from "react";

// Components
import { TableHeader, TableBody } from "@/components";
import { Table as TableChakra, TableContainer } from "@chakra-ui/react";

// Types
import { HeaderList, Project } from "@/types";

// Utils
import { sortByColumn } from "@/utils";

interface TableProp {
  headerList: HeaderList[];
  projects: Project[];
}

const Table = memo<TableProp>(({ headerList, projects }: TableProp) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Handle sort by column
  const sortedProjects = sortByColumn(projects, sortColumn, sortDirection);

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
