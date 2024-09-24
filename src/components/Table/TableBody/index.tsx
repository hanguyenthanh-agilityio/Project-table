import { memo } from "react";

// Components
import { TableRow } from "@/components";
import { Tbody, Text, Tr } from "@chakra-ui/react";

// Types
import { Project } from "@/types";

interface TableBodyProps {
  projects: Project[];
}

const TableBody = memo<TableBodyProps>(({ projects }: TableBodyProps) => {
  return (
    <Tbody>
      {projects.length ? (
        projects.map((project) => (
          <Tr key={project.id}>
            <TableRow project={project} />
          </Tr>
        ))
      ) : (
        <Text>Empty list.</Text>
      )}
    </Tbody>
  );
});

export default TableBody;
