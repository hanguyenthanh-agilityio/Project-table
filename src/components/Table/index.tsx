import { memo } from "react";

// Components
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { Table as TableChakra, TableContainer } from "@chakra-ui/react";

// Types
import { HeaderList, Project } from "@/types";

interface TableProp {
  headerList: HeaderList[];
  projects: Project[];
}

const Table = memo<TableProp>(({ headerList, projects }: TableProp) => (
  <TableContainer>
    <TableChakra>
      <TableHeader headerList={headerList} />
      <TableBody projects={projects} />
    </TableChakra>
  </TableContainer>
));

export default Table;
