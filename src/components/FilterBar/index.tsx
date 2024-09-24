import { memo } from "react";

// Chakra UI
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

// Components
import { Input, FormModal } from "@/components";

interface FilterBarProps {
  isLoading: boolean;
  onChangeSearch: () => void;
  onConfirm: () => void;
}
const FilterBar = memo<FilterBarProps>(
  ({ isLoading, onChangeSearch, onConfirm }: FilterBarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
        {isOpen && (
          <FormModal
            modalTitle="Add new project"
            buttonLabel="Add project"
            onClose={onClose}
            onConfirm={onConfirm}
            isLoading={isLoading}
          />
        )}
      </Flex>
    );
  },
);

export default FilterBar;
