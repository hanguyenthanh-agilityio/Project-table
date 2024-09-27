import type { Meta, StoryObj } from "@storybook/react";

// Components
import Table from ".";
import { PROJECT_LIST } from "@/mocks/table";
import { HEADER_TABLE } from "@/constants";

const meta = {
  title: "Example/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    projects: {
      description: "The project for table",
      control: { type: "text" },
    },
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
    projects: PROJECT_LIST,
    headerList: HEADER_TABLE,
  },
};
