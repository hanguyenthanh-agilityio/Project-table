import { memo } from "react";

// Chakra UI
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

// Components
import { MobileNav, SidebarContent } from "./SidebarContent";

interface SidebarProp {
  children: React.ReactNode;
}

const Sidebar = memo<SidebarProp>(({ children }: SidebarProp) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
        bg="background.darkPurple"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: "72px" }}>{children}</Box>
    </Box>
  );
});

export default Sidebar;
