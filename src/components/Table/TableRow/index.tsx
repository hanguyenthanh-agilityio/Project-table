import { Project } from "@/types";
import { Td, Skeleton } from "@chakra-ui/react";
import { memo, ReactNode } from "react";

// Define the column type for better type safety
export interface ColumnType {
  key: string;
  title: string;
  customCell?: (project: Project) => ReactNode;
}

interface TableRowProps {
  project: Project;
  columns: ColumnType[];
  isLoading: boolean; // New prop to indicate loading state
}

const TableRow = memo<TableRowProps>(({ project, columns, isLoading }) => {
  return (
    <>
      {columns.map(({ key, customCell }) => (
        <Td key={key}>
          {isLoading ? (
            <Skeleton height="20px" />
          ) : customCell ? (
            customCell(project)
          ) : (
            project[key as keyof Project]
          )}
        </Td>
      ))}
    </>
  );
});

export default TableRow;
