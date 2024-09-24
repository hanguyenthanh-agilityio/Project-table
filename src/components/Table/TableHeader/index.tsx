// Components
import { Th, Thead, Tr } from "@chakra-ui/react";

// Types
import { HeaderList } from "@/types";

interface TableHeaderProps {
  headerList: HeaderList[];
}

const TableHeader = ({ headerList }: TableHeaderProps) => (
  <Thead>
    <Tr>
      {headerList.map(({ title }, index) => (
        <Th key={`title-${index}`}>{title}</Th>
      ))}
    </Tr>
  </Thead>
);

export default TableHeader;
