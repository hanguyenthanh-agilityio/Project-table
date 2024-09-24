import { BellIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Avatar, Flex, Heading } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    p="12px 20px"
    width="full"
  >
    <Heading size="large">{title}</Heading>
    <Flex gap="5" alignItems="center">
      <BellIcon w="24px" h="24px" color="#868fa0" />
      <QuestionOutlineIcon w="24px" h="24px" color="#868fa0" />
      <Avatar
        w="32px"
        h="32px"
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
      />
    </Flex>
  </Flex>
);

export default Header;
