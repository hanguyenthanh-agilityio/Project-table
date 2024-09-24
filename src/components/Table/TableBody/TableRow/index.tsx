import { memo } from "react";

// Types
import { DropdownItemType, Project } from "@/types";

// Components
import { Avatar, Flex, Td } from "@chakra-ui/react";
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
  const {
    projectName,
    avatar,
    status,
    latestUpdate,
    resources,
    estimation,
    createdAt,
    finishAt,
  } = project;

  return (
    <>
      <Td>{projectName}</Td>
      <Td>
        <Avatar name={projectName} src={avatar} />
      </Td>
      <Td>{status}</Td>
      <Td>{latestUpdate}</Td>
      <Td textAlign="center">
        <Flex
          bg="background.primary"
          w="24px"
          h="24px"
          color="text.secondary"
          alignItems="center"
          justifyContent="center"
          borderRadius="6px"
        >
          {resources}
        </Flex>
      </Td>
      <Td display="flex" flexDir="row" gap="2" alignItems="center">
        <Flex bg="background.primary" borderRadius="6px" p="5px 10px">
          {createdAt}
        </Flex>
        {">"}
        <Flex bg="background.primary" borderRadius="6px" p="5px 10px">
          {finishAt}
        </Flex>
      </Td>
      <Td>{estimation}</Td>
      <Td>
        <Dropdown dropdownItems={actionMenu} />
      </Td>
    </>
  );
});

export default TableRow;
