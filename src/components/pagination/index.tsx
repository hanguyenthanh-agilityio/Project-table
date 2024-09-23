import { memo } from "react";

// Types
import { Project } from "@/types";

// Chakra UI
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";

interface PaginationProps {
  projects: Project[];
  onClickPrevious: () => void;
  onClickNext: () => void;
  disable?: boolean;
}

const Pagination = memo<PaginationProps>(
  ({ projects, onClickPrevious, onClickNext, disable }: PaginationProps) => (
    <>
      <Flex justifyContent="right" pt="20px" gap="10px">
        <Button
          h="25px"
          w="20px"
          leftIcon={<ArrowLeftIcon w="10px" h="10px" />}
          onClick={onClickPrevious}
          disabled={disable}
        />
        <Button
          h="20px"
          w="20px"
          rightIcon={<ArrowRightIcon w="10px" h="10px" />}
          onClick={onClickNext}
          disabled={projects.length < 10}
        />
      </Flex>
    </>
  ),
);

export default Pagination;
