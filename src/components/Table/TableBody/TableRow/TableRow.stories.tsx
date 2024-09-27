import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableRow from ".";
import { Table } from "@chakra-ui/react";
import { PROJECT_ITEM } from "@/mocks/table";

const meta = {
  title: "Example/TableRow",
  component: TableRow,
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
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    project: PROJECT_ITEM,
  },
  render: (args) => {
    return (
      <Table>
        <TableRow {...args} />
      </Table>
    );
  },
};
