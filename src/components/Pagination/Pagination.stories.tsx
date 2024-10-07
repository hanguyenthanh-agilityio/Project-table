import type { Meta, StoryObj } from "@storybook/react";

// Components
import Pagination from ".";
import { PROJECT_LIST } from "@/mocks/table";

const meta = {
  title: "Example/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    projects: {
      description: "The list project",
      control: { type: "text" },
    },
    onClickPrevious: {
      description: "The onClickPrevious of pagination",
      control: { type: "object" },
    },
    onClickNext: {
      description: "The onClickNext of pagination",
      control: { type: "object" },
    },
    disable: {
      description: "The disable of pagination",
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    projects: PROJECT_LIST,
    onClickNext: () => {},
    onClickPrevious: () => {},
    disable: false,
  },
  render: (args) => {
    return <Pagination {...args} />;
  },
};

export const Secondary: Story = {
  args: {
    projects: PROJECT_LIST,
    onClickNext: () => {},
    onClickPrevious: () => {},
    disable: true,
  },
  render: (args) => {
    return <Pagination {...args} />;
  },
};
