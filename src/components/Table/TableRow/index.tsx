import { Project } from "@/types";
import { Td } from "@chakra-ui/react";
import { memo, ReactNode } from "react";

// Define the column type for better type safety
export interface ColumnType {
  key: string;
  title: string;
  customCell?: (project: Project) => ReactNode;
}
interface CommonTableRowProps {
  project: Project;
  columns: ColumnType[];
}

const CommonTableRow = memo<CommonTableRowProps>(({ project, columns }) => {
  return (
    <>
      {columns.map(({ key, customCell }, index) => (
        <Td key={index}>
          {customCell ? customCell(project) : project[key as keyof Project]}
        </Td>
      ))}
    </>
  );
});

export default CommonTableRow;
