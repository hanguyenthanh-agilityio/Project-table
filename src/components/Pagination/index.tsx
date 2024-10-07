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
  disable: boolean;
}

const Pagination = memo<PaginationProps>(
  ({ projects, onClickPrevious, onClickNext, disable }) => (
    <Flex justifyContent="right" p="20px 20px 50px 0" gap="10px">
      <Button
        h="25px"
        w="20px"
        bg="none"
        boxShadow="0px 0px 0px 1px #868FA029"
        leftIcon={<ArrowLeftIcon w="10px" h="10px" />}
        onClick={onClickPrevious}
        isDisabled={disable}
      />
      <Button
        h="25px"
        w="20px"
        bg="none"
        boxShadow="0px 0px 0px 1px #868FA029"
        rightIcon={<ArrowRightIcon w="10px" h="10px" />}
        onClick={onClickNext}
        isDisabled={projects.length < 10}
      />
    </Flex>
  ),
);

export default Pagination;
