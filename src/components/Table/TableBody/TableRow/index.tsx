import { lazy, memo, Suspense } from "react";

// Chakra UI
import { Avatar, Flex, Td, useDisclosure } from "@chakra-ui/react";

// Types
import { DropdownItemType, Project } from "@/types";

// Components
import { Dropdown, LoadingIndicator } from "@/components";
const FormModal = lazy(() => import("@/components/FormModal"));

// Utils
import { formatDate, formatTimeline } from "@/utils";

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
      <Td>{formatDate(latestUpdate)}</Td>
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
          minW="100px"
          justifyContent="center"
        >
          {formatTimeline(createdAt)}
        </Flex>
        {">"}
        <Flex
          bg="background.primary"
          borderRadius="6px"
          p="5px 10px"
          color="text.secondary"
          minW="100px"
          justifyContent="center"
        >
          {formatTimeline(finishAt)}
        </Flex>
      </Td>
      <Td>{`US$ ${estimation}`}</Td>
      <Td>
        <Dropdown dropdownItems={actionMenu} />
      </Td>
      <Suspense fallback={<LoadingIndicator />}>
        {isOpenEdit && (
          <FormModal
            modalTitle="Edit project"
            buttonLabel="Confirm"
            onClose={onCloseEdit}
            onConfirm={() => {}}
          />
        )}
      </Suspense>
    </>
  );
});

export default TableRow;
