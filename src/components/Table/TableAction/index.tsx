import { lazy, Suspense, useCallback } from "react";
import { AxiosError } from "axios";
import { Flex, useDisclosure, useToast } from "@chakra-ui/react";

// Components
import { Dropdown, LoadingIndicator } from "@/components";

// Lazy load modal components
const ConfirmModal = lazy(() => import("@/components/ConfirmModal"));
const FormModal = lazy(() => import("@/components/FormModal"));

// Hooks
import {
  useEditProjectMutation,
  useDeleteProjectMutation,
} from "@/hooks/useProject";

// types
import { DropdownItemType, Project } from "@/types";

interface ActionCellProps {
  project: Project;
}

const ActionCell = ({ project }: ActionCellProps) => {
  const toast = useToast();

  // Disclosure for modals
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

  // Define action items for dropdown
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

  // Mutations for editing and deleting
  const { mutate: editProject, isLoading: isLoadingEdit } =
    useEditProjectMutation();
  const { mutate: deleteProject, isLoading: isLoadingDelete } =
    useDeleteProjectMutation();

  // Handle error
  const handleError = useCallback(
    (error: string) => {
      toast({
        title: error,
        status: "error",
        isClosable: true,
      });
    },
    [toast],
  );

  // Handle edit success
  const handleEditSuccess = useCallback(() => {
    onCloseEdit();
    toast({
      title: "Project updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [onCloseEdit, toast]);

  // Handle edit project
  const handleEdit = useCallback(
    (data: Project) => {
      if (project.id) {
        editProject(data, {
          onSuccess: handleEditSuccess,
          onError: (error) => handleError((error as AxiosError).message),
        });
      }
    },
    [editProject, handleEditSuccess, handleError, project.id],
  );

  // Handle delete success
  const handleDeleteSuccess = useCallback(() => {
    onCloseDelete();
    toast({
      title: "Project deleted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [onCloseDelete, toast]);

  // Handle delete project logic
  const handleDelete = useCallback(() => {
    if (project.id) {
      deleteProject(project.id.toString(), {
        onSuccess: handleDeleteSuccess,
        onError: (error) => handleError((error as AxiosError).message),
      });
    }
  }, []);

  return (
    <Flex>
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
            description={`Are you sure you want to delete ${project.projectName}? If you delete, it will be permanently lost.`}
            buttonLabel="Delete"
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            onDelete={handleDelete}
            isLoading={isLoadingDelete}
          />
        )}
      </Suspense>
    </Flex>
  );
};

export default ActionCell;
