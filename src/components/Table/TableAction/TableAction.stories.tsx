import type { Meta, StoryObj } from "@storybook/react";

// Components

import { Table } from "@chakra-ui/react";
import { PROJECT_ITEM } from "@/mocks/table";
import ActionCell from ".";

const meta = {
  title: "Example/TableAction",
  component: ActionCell,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    project: {
      description: "The project for table",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof ActionCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    project: PROJECT_ITEM,
  },
  render: (args) => {
    return (
      <Table>
        <ActionCell {...args} />
      </Table>
    );
  },
};
