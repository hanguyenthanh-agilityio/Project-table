import { memo } from "react";

// Types
import { DropdownItemType, Project } from "@/types";

// Components
import { Td } from "@chakra-ui/react";
import { Dropdown } from "@/components";

interface TableRowPops {
  project: Project;
}

const actionMenu: DropdownItemType[] = [
  {
    name: "Edit",
  },
  {
    name: "Delete",
  },
];

const TableRow = memo<TableRowPops>(({ project }: TableRowPops) => {
  const { projectName, avatar, status, latestUpdate, resources, estimation } =
    project;

  return (
    <>
      <Td>{projectName}</Td>
      <Td>{avatar}</Td>
      <Td>{status}</Td>
      <Td>{latestUpdate}</Td>
      <Td>{resources}</Td>
      <Td>{estimation}</Td>
      <Td>
        <Dropdown dropdownItems={actionMenu} />
      </Td>
    </>
  );
});

export default TableRow;
