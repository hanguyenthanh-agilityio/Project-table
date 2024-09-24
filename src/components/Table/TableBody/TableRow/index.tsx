import { memo } from "react";

// Chakra UI
import { Avatar, Flex, Td, useDisclosure } from "@chakra-ui/react";

// Types
import { DropdownItemType, Project } from "@/types";

// Components

import { Dropdown, FormModal } from "@/components";

interface TableRowPops {
  project: Project;
}

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

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const actionMenu: DropdownItemType[] = [
    {
      name: "Edit",
      action: onOpenEdit,
    },
    {
      name: "Delete",
    },
  ];

  return (
    <>
      <Td>{projectName}</Td>
      <Td>
        <Avatar borderRadius="6px" name={projectName} src={avatar} />
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
        <Flex
          bg="background.primary"
          borderRadius="6px"
          p="5px 10px"
          color="text.secondary"
        >
          {createdAt}
        </Flex>
        {">"}
        <Flex
          bg="background.primary"
          borderRadius="6px"
          p="5px 10px"
          color="text.secondary"
        >
          {finishAt}
        </Flex>
      </Td>
      <Td>{`US$ ${estimation}`}</Td>
      <Td>
        <Dropdown dropdownItems={actionMenu} />
      </Td>
      {isOpenEdit && (
        <FormModal
          modalTitle="Edit project"
          buttonLabel="Confirm"
          onClose={onCloseEdit}
          onConfirm={() => {}}
        />
      )}
    </>
  );
});

export default TableRow;
