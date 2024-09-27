import type { Meta, StoryObj } from "@storybook/react";

// Components
import Dropdown from ".";

const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    dropdownItems: {
      description: "The list item of dropdown",
      control: { type: "select" },
      options: ["Edit", "Delete"],
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    dropdownItems: [
      {
        name: "Edit",
        action: () => {},
      },
      {
        name: "Delete",
        action: () => {},
      },
    ],
  },
};
