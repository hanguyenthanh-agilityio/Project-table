import type { Meta, StoryObj } from "@storybook/react";

// Components
import Input from ".";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "The placeholder provide more information",
      control: { type: "text" },
    },
    onKeyDown: {
      description: "The action when press key on keyboard",
      control: { type: "object" },
    },
    onChange: {
      description: "The action when typing",
      control: { type: "object" },
    },
    value: {
      description: " The value for Input",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Search",
    onChange: () => {},
    onKeyDown: () => {},
  },
};
