import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { memo } from "react";

// CSS
import "./date-picker.css";
import { Text } from "@chakra-ui/react";

interface DateProps {
  label: string;
  selected: Date | null;
  minDate?: Date | null;
  endDate?: Date | null;
  startDate?: Date | null;
  onChange: (date: Date | null) => void;
}

const DateRangePicker = memo<DateProps>(
  ({
    label,
    selected,
    minDate,
    endDate,
    startDate,
    onChange,
    ...props
  }: DateProps) => (
    <>
      <Text pb="5px">{label}</Text>
      <DatePicker
        className="date-picker"
        selected={selected}
        onChange={onChange}
        dateFormat="dd/MM/YYY"
        minDate={minDate || undefined}
        endDate={endDate || undefined}
        startDate={startDate || undefined}
        selectsStart
        {...props}
      />
    </>
  ),
);

export default DateRangePicker;
