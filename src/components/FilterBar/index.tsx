import { lazy, memo, Suspense } from "react";

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
    console.log("re - render");

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

(prevProps: FilterBarProps, nextProps: FilterBarProps) => {
  return (
    prevProps.isLoading === nextProps.isLoading &&
    prevProps.onChangeSearch === nextProps.onChangeSearch &&
    prevProps.onConfirm === nextProps.onConfirm
  );
};

export default FilterBar;
