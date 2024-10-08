import {
  useState,
  useCallback,
  Suspense,
  lazy,
  useMemo,
  memo,
  useEffect,
} from "react";

// Components
import { TableHeader, TableBody, LoadingIndicator } from "@/components";
import {
  Table as TableChakra,
  TableContainer,
  useToast,
  Text,
  Skeleton,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
const Pagination = lazy(() => import("@/components/Pagination"));

// Types
import { HeaderList, Params, SortOption } from "@/types";

// Utils
import { sortByColumn, tableColumns } from "@/utils";
import { useProjectList } from "@/hooks";

interface TableProp {
  headerList: HeaderList[];
  filters: Params;
}

const Table = memo(({ headerList, filters }: TableProp) => {
  const toast = useToast();

  const [filter, setFilter] = useState<Params>({ ...filters });

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
  const ASC = "asc";
  const DESC = "desc";
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortOption>(ASC);

  // Handle sort by column
  const sortedProjects = useMemo(
    () => sortByColumn(projects, sortColumn, sortDirection),
    [projects, sortColumn, sortDirection],
  );

  const handleSort = useCallback(
    (column: string) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === ASC ? DESC : ASC);
      } else {
        setSortColumn(column);
        setSortDirection(ASC);
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

  useEffect(() => {
    setFilter((prev) => ({ ...prev, ...filters }));
  }, [filters]);

  return (
    <>
      {isLoading ? (
        <TableContainer>
          <TableChakra>
            <Tbody>
              {[...Array(5)].map((_, index) => (
                <Tr key={index}>
                  {columns.map((_col, colIndex) => (
                    <Td key={colIndex}>
                      <Skeleton height="20px" />
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </TableChakra>
        </TableContainer>
      ) : projects?.length === 0 ? (
        <Text>No projects found.</Text>
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

(prevProps: TableProp, nextProps: TableProp) => {
  return (
    JSON.stringify(prevProps.headerList) ===
    JSON.stringify(nextProps.headerList)
  );
};

export default Table;
