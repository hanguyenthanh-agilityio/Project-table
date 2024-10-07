import { useState, useCallback, Suspense, lazy } from "react";
import { memo } from "react";

// Components
import { TableHeader, TableBody, LoadingIndicator } from "@/components";
import {
  Table as TableChakra,
  TableContainer,
  useToast,
  Text,
} from "@chakra-ui/react";
const Pagination = lazy(() => import("@/components/Pagination"));

// Types
import { HeaderList, Params } from "@/types";

// Utils
import { sortByColumn, tableColumns } from "@/utils";
import { useProjectList } from "@/hooks/useProject";

interface TableProp {
  headerList: HeaderList[];
}

const Table = memo<TableProp>(({ headerList }) => {
  const toast = useToast();

  const initialFilters = {
    projectName: "",
    page: 1,
    limit: 10,
  };

  const [filter, setFilter] = useState<Params>(initialFilters);

  const handleError = useCallback(
    (error: string) => {
      toast({
        title: error,
        status: "error",
        isClosable: true,
      });
    },
    [toast],
  );

  // Get list project
  const { isLoading, data: projects } = useProjectList(filter, handleError);

  // Get columns from utils
  const columns = tableColumns();

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

  // Handle pagination
  const handleClickNext = useCallback(() => {
    setFilter((prev) => ({ ...prev, page: prev.page + 1 }));
  }, []);

  const handleClickPrevious = useCallback(() => {
    setFilter((prev) => ({ ...prev, page: Math.max(prev.page - 1, 1) }));
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : projects?.length === 0 ? (
        <Text>No projects found</Text>
      ) : (
        <TableContainer>
          <TableChakra>
            <TableHeader
              headerList={headerList}
              onSort={handleSort}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
            />
            <TableBody
              projects={sortedProjects}
              columns={columns}
              isLoading={isLoading}
            />
          </TableChakra>
        </TableContainer>
      )}
      {/* Pagination */}
      <Suspense fallback={<LoadingIndicator />}>
        <Pagination
          projects={projects}
          disable={filter.page === 1}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
        />
      </Suspense>
    </>
  );
});

export default Table;
