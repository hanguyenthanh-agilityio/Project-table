import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableHeader from ".";
import { HEADER_TABLE } from "@/constants";
import { Table } from "@chakra-ui/react";

const meta = {
  title: "Example/TableHeader",
  component: TableHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    headerList: {
      description: "The headerList for table",
      control: { type: "text" },
      options: [
        "Project Name",
        "PM",
        "Status",
        "Latest update",
        "Resource",
        "Project timeline",
        "estimation",
      ],
    },
  },
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headerList: HEADER_TABLE,
    onSort: () => {},
    sortDirection: "asc",
    sortColumn: "",
  },
  render: (args) => {
    return (
      <Table>
        <TableHeader {...args} />
      </Table>
    );
  },
};
