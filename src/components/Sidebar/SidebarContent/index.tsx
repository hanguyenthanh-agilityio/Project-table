// Chakra UI
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  BoxProps,
  FlexProps,
  Button,
  Image,
} from "@chakra-ui/react";

// React icon
import { FiHome, FiSettings, FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";

// Components
import { Header } from "@/components";

// Images
import Logo from "@/Logo.svg";

interface LinkItemProps {
  icon: IconType;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { icon: FiHome },
  { icon: FiSettings },
];

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      w={{ base: "full", md: "72px" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="5px"
        justifyContent="center
      "
      >
        <Image src={Logo} w="40px" h="40px" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        {LinkItems.map((link) => (
          <Button
            mb="10px"
            h="40px"
            w="40px"
            bg="none"
            border="none"
            borderRadius="lg"
            cursor="pointer"
            _hover={{
              bg: "background.secondary",
              color: "white",
              border: "1px",
              borderColor: "border.secondary",
            }}
          >
            <Icon
              display="flex"
              color="text.light"
              as={link.icon}
              w="20px"
              h="20px"
            />
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: "72px" }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="background.heading"
      borderBottomWidth="1px"
      borderBottomColor="border.primary"
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Header title="Project" />
    </Flex>
  );
};
