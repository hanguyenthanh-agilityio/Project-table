import { memo } from "react";

// Components
import TableHeader from "./TableHeader";
import { Table as TableChakra, TableContainer } from "@chakra-ui/react";

// Types
import { HeaderList } from "@/types";

interface TableProp {
  headerList: HeaderList[];
}

const Table = memo<TableProp>(({ headerList }: TableProp) => (
  <TableContainer>
    <TableChakra>
      <TableHeader headerList={headerList} />
    </TableChakra>
  </TableContainer>
));

export default Table;
