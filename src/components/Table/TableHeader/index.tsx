import { Th, Thead, Tr } from "@chakra-ui/react";
import { HeaderList } from "@/types";

interface TableHeaderProps {
  headerList: HeaderList[];
  onSort: (column: string) => void;
  sortColumn: string | null;
  sortDirection: "asc" | "desc";
}

const TableHeader = ({
  headerList,
  onSort,
  sortColumn,
  sortDirection,
}: TableHeaderProps) => (
  <Thead>
    <Tr>
      {headerList.map(({ title, key }, index) => (
        <Th key={`title-${index}`} cursor="pointer" onClick={() => onSort(key)}>
          {title}
          {sortColumn === key && (
            <span>{sortDirection === "asc" ? " ▲" : " ▼"}</span>
          )}
        </Th>
      ))}
    </Tr>
  </Thead>
);

export default TableHeader;
