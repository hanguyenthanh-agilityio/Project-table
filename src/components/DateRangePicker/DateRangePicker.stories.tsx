import type { Meta, StoryObj } from "@storybook/react";

// Components
import DateRangePicker from ".";
import { useState } from "react";

const meta = {
  title: "Example/DateRangePicker",
  component: DateRangePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The label for datepicker",
      control: { type: "text" },
    },
    selected: {
      description: "The currently selected date",
      control: { type: "date" },
    },
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "From",
    selected: null,
    onChange: () => {},
  },
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
      <DateRangePicker
        label="Select Date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    );
  },
};

export const DateRange: Story = {
  args: {
    label: "From",
    selected: null,
    onChange: () => {},
  },
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    return (
      <>
        <DateRangePicker
          label="From"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DateRangePicker
          label="To"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </>
    );
  },
};
