import { memo } from "react";

// Chakra UI
import {
  Icon,
  Input as InputChakra,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchInputProps {
  placeholder?: string;
  onChange?: () => void;
  onKeyDown?: () => void;
  value?: string;
}

const Input = memo<SearchInputProps>(
  ({ placeholder, onChange, onKeyDown, value }: SearchInputProps) => {
    return (
      <InputGroup maxW={{ xs: "100%", lg: "300px" }}>
        <InputChakra
          id="myInput"
          size={{ xs: "secondary", lg: "default" }}
          fontSize={{ xs: "12px", md: "17px" }}
          pl="40px"
          name="input"
          data-testid="input-field"
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
        />
        <InputRightElement
          right={{ xs: "10px", md: "16px" }}
          bottom="0px"
          top="0px"
          height="auto"
          children={
            <Icon
              as={SearchIcon}
              color="text.default"
              w={{ xs: "15px", md: "22px" }}
              h={{ xs: "15px", md: "22px" }}
            />
          }
        />
      </InputGroup>
    );
  },
);

export default Input;
