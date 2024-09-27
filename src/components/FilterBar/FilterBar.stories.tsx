import type { Meta, StoryObj } from "@storybook/react";

// Components
import FilterBar from ".";

const meta = {
  title: "Example/FilterBar",
  component: FilterBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoading: {
      description: "The loading for filter",
      control: { type: "boolean" },
    },
    isOpen: {
      description: "The action open modal",
      control: { type: "boolean" },
    },
    onClickAdd: {
      description: "The action click button to add new project",
      control: { type: "object" },
    },
    onClose: {
      description: "The action close modal",
      control: { type: "object" },
    },
    onChangeSearch: {
      description: "The action when tying content",
      control: { type: "object" },
    },
    onConfirm: {
      description: "The action when click button confirm",
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isLoading: false,
    isOpen: false,
    onClickAdd: () => {},
    onClose: () => {},
    onChangeSearch: () => {},
    onConfirm: () => {},
  },
};
export const Secondary: Story = {
  args: {
    isLoading: false,
    isOpen: true,
    onClickAdd: () => {},
    onClose: () => {},
    onChangeSearch: () => {},
    onConfirm: () => {},
  },
};
