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
    onChangeSearch: () => {},
    onConfirm: () => {},
  },
};
export const Secondary: Story = {
  args: {
    isLoading: false,
    onChangeSearch: () => {},
    onConfirm: () => {},
  },
};
