import { lazy, memo, Suspense, useCallback } from "react";

// Chakra UI
import { Avatar, Flex, Td, useDisclosure, useToast } from "@chakra-ui/react";

// Types
import { DropdownItemType, Project } from "@/types";

// Components
import { Dropdown, LoadingIndicator } from "@/components";
const ConfirmModal = lazy(() => import("@/components/ConfirmModal"));
const FormModal = lazy(() => import("@/components/FormModal"));

// Utils
import { formatDate, formatTimeline } from "@/utils";
import { useEditProjectMutation } from "@/hooks/useProject";
import { AxiosError } from "axios";

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

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const toast = useToast();

  const actionMenu: DropdownItemType[] = [
    {
      name: "Edit",
      action: onOpenEdit,
    },
    {
      name: "Delete",
      action: onOpenDelete,
    },
  ];

  const { mutate: ediProject, isLoading: isLoadingEdit } =
    useEditProjectMutation();

  const handleError = useCallback((error: string) => {
    toast({
      title: error,
      status: "error",
      isClosable: true,
    });
  }, []);

  // Show message when update success
  const handleEditSuccess = useCallback(() => {
    onCloseEdit();
    toast({
      title: "Appointment updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, []);
  //Handle update appointment
  const handleEdit = useCallback((data: Project) => {
    if (project.id) {
      ediProject(data, {
        onSuccess: handleEditSuccess,
        onError: (error) => handleError((error as AxiosError).message),
      });
    }
  }, []);

  const handleDelete = () => {};

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
        <Suspense fallback={<LoadingIndicator />}>
          {isOpenEdit && (
            <FormModal
              modalTitle="Edit project"
              buttonLabel="Confirm"
              onClose={onCloseEdit}
              onConfirm={handleEdit}
              projectItem={project}
              isLoading={isLoadingEdit}
            />
          )}
          {isOpenDelete && (
            <ConfirmModal
              description={`Are you sure you want to delete ${projectName}? If you delete, it will be permanently lost.`}
              buttonLabel="Delete"
              isOpen={isOpenDelete}
              onClose={onCloseDelete}
              onDelete={handleDelete}
            />
          )}
        </Suspense>
      </Td>
    </>
  );
});

export default TableRow;
