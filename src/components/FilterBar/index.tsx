import { lazy, memo, Suspense, useCallback } from "react";

// Chakra UI
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

// Components
import { Input, LoadingIndicator } from "@/components";
import { Project } from "@/types";
const FormModal = lazy(() => import("@/components/FormModal"));

interface FilterBarProps {
  isLoading: boolean;
  onChangeSearch: (value: string) => void;
  onConfirm: (data: Project) => void;
}
const FilterBar = memo(
  ({ isLoading, onChangeSearch, onConfirm }: FilterBarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    return (
      <Flex justifyContent="space-between" alignItems="center" p="20px">
        <Flex w="400px">
          <Input onChange={onChangeSearch} />
        </Flex>
        <Button
          variant="primary"
          leftIcon={<AddIcon w="12px" h="12px" mr="5px" />}
          onClick={onOpen}
        >
          New project
        </Button>
        <Suspense fallback={<LoadingIndicator />}>
          {isOpen && (
            <FormModal
              modalTitle="Add new project"
              buttonLabel="Add project"
              onClose={handleClose}
              onConfirm={onConfirm}
              isLoading={isLoading}
            />
          )}
        </Suspense>
      </Flex>
    );
  },
);

export default FilterBar;
