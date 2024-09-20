import { memo } from "react";
import { Select as SelectChakra } from "@chakra-ui/react";

// Types
import { SelectType } from "@/types";

interface SelectProps {
  options: SelectType[];
  placeholder?: string;
  onBlur?: () => void;
  onChange?: () => void;
  value?: string;
}

const Select = memo<SelectProps>(
  ({
    options,
    placeholder = "Select",
    onBlur,
    onChange,
    value,
  }: SelectProps) => {
    return (
      <SelectChakra
        maxW={{ xs: "180px", lg: "210px" }}
        bg="#fff"
        placeholder={placeholder}
        name="select-base"
        cursor="pointer"
        iconColor="text.helper"
        data-testid="select-base"
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      >
        {options.map(({ label, value }, index) => (
          <option key={`label-${index}`} value={value}>
            {label}
          </option>
        ))}
      </SelectChakra>
    );
  },
);

export default Select;
