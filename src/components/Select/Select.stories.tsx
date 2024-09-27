import type { Meta, StoryObj } from "@storybook/react";

// Components
import Select from ".";

// Constants
import { OPTION_SORT } from "@/constants";

const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "List of option",
      control: { type: "select" },
      options: ["Edit", "Delete"],
    },
    placeholder: {
      description: "The placeholder provide more information",
      control: { type: "text" },
    },
    onBlur: {
      description: "The action when focus is removed from element",
      control: { type: "object" },
    },
    onChange: {
      description: "The action when typing",
      control: { type: "object" },
    },
    value: {
      description: " The value for Select",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: OPTION_SORT,
    placeholder: "Sort by",
    onChange: () => {},
  },
};
