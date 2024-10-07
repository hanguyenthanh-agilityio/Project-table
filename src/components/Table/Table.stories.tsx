import type { Meta, StoryObj } from "@storybook/react";

// Components
import Table from ".";
import { HEADER_TABLE } from "@/constants";

const meta = {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    headerList: {
      description: "The headerList for table",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headerList: HEADER_TABLE,
    filters: {
      page: 1,
      limit: 10,
    },
  },
};
