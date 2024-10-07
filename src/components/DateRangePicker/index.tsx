import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { memo } from "react";

// CSS
import "./date-picker.css";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
interface DateProps {
  label: string;
  selected: Date | null;
  minDate?: Date | null;
  onChange: (date: Date | null) => void;
  errorMessage?: string;
}

const DateRangePicker = memo<DateProps>(
  ({ label, selected, onChange, minDate, errorMessage }) => {
    return (
      <FormControl isInvalid={!!errorMessage}>
        <FormLabel>{label}</FormLabel>
        <DatePicker
          className="date-picker"
          selected={selected}
          onChange={onChange}
          dateFormat="dd/MM/YYY"
          minDate={minDate || undefined}
          placeholderText="Select date"
          isClearable
        />
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    );
  },
);

export default DateRangePicker;
