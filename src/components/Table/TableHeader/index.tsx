import { Th, Thead, Tr } from "@chakra-ui/react";
import { HeaderList, SortOption } from "@/types";
import { memo } from "react";
import "./tableHeader.css";

interface TableHeaderProps {
  headerList: HeaderList[];
  onSort: (column: string) => void;
  sortColumn: string | null;
  sortDirection: SortOption;
}

const TableHeader = memo<TableHeaderProps>(
  ({ headerList, onSort, sortColumn, sortDirection }: TableHeaderProps) => {
    const handleClick = (key: string) => onSort(key);
    return (
      <Thead>
        <Tr>
          {headerList.map(({ title, key }) => (
            <Th
              key={`title-${key}`}
              className={`table-header-${key}`}
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
