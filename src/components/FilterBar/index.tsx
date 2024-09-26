import { lazy, memo, Suspense } from "react";

// Chakra UI
import { Button, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

// Components
import { Input, LoadingIndicator } from "@/components";
import { Project } from "@/types";
const FormModal = lazy(() => import("@/components/FormModal"));

interface FilterBarProps {
  isLoading: boolean;
  isOpen: boolean;
  onClickAdd: () => void;
  onClose: () => void;
  onChangeSearch: () => void;
  onConfirm: (data: Project) => void;
}
const FilterBar = memo<FilterBarProps>(
  ({
    isLoading,
    isOpen,
    onClickAdd,
    onClose,
    onChangeSearch,
    onConfirm,
  }: FilterBarProps) => {
    return (
      <Flex justifyContent="space-between" alignItems="center" p="20px">
        <Flex w="400px">
          <Input onChange={onChangeSearch} />
        </Flex>
        <Button
          variant="primary"
          leftIcon={<AddIcon w="12px" h="12px" mr="5px" />}
          onClick={onClickAdd}
        >
          New project
        </Button>
        <Suspense fallback={<LoadingIndicator />}>
          {isOpen && (
            <FormModal
              modalTitle="Add new project"
              buttonLabel="Add project"
              onClose={onClose}
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
