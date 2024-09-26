import { memo } from "react";

// Components
import { Menu, MenuButton, MenuItem, MenuList, Image } from "@chakra-ui/react";

// Images
import more from "../../../public/more.svg";

// Types
import { DropdownItemType } from "@/types";

interface DropdownProps {
  dropdownItems: DropdownItemType[];
}

const DropDown = memo<DropdownProps>(({ dropdownItems }: DropdownProps) => (
  <Menu>
    <MenuButton>
      <Image src={more} />
    </MenuButton>
    <MenuList>
      {dropdownItems.map(({ name, action }, index) => (
        <MenuItem
          key={`menu-${index}`}
          onClick={action}
          data-testid="menu-item"
        >
          {name}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
));

export default DropDown;
