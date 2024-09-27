import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableBody from ".";
import { Table } from "@chakra-ui/react";
import { PROJECT_LIST } from "@/mocks/table";

const meta = {
  title: "Example/TableBody",
  component: TableBody,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    projects: {
      description: "The projects for table",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof TableBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    projects: PROJECT_LIST,
  },
  render: (args) => {
    return (
      <Table>
        <TableBody {...args} />
      </Table>
    );
  },
};
