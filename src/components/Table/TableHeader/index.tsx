import { Th, Thead, Tr } from "@chakra-ui/react";
import { HeaderList } from "@/types";
import { memo } from "react";

interface TableHeaderProps {
  headerList: HeaderList[];
  onSort: (column: string) => void;
  sortColumn: string | null;
  sortDirection: "asc" | "desc";
}

const TableHeader = memo<TableHeaderProps>(
  ({ headerList, onSort, sortColumn, sortDirection }: TableHeaderProps) => {
    const handleClick = (key: string) => onSort(key);
    return (
      <Thead>
        <Tr>
          {headerList.map(({ title, key }, index) => (
            <Th
              key={`title-${index}`}
              cursor="pointer"
              onClick={() => handleClick(key)}
            >
              {title}
              {sortColumn === key && (
                <span>{sortDirection === "asc" ? " ▲" : " ▼"}</span>
              )}
            </Th>
          ))}
        </Tr>
      </Thead>
    );
  },
);

export default TableHeader;
