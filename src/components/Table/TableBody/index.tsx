import { memo } from "react";

// Components
import { TableRow } from "@/components";
import { Tbody, Text, Tr } from "@chakra-ui/react";

// Types
import { Project } from "@/types";
import { ColumnType } from "../TableRow";

interface TableBodyProps {
  projects: Project[];
  columns: ColumnType[];
}

const TableBody = memo<TableBodyProps>(
  ({ projects, columns }: TableBodyProps) => {
    return (
      <Tbody>
        {projects.length ? (
          projects.map((project) => (
            <Tr key={project.id}>
              <TableRow project={project} columns={columns} />
            </Tr>
          ))
        ) : (
          <Text>Empty list.</Text>
        )}
      </Tbody>
    );
  },
);

export default TableBody;
