import type { Meta, StoryObj } from "@storybook/react";

// Components
import Sidebar from ".";

const meta = {
  title: "Example/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The onClose for sidebar",
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <></>,
  },
};
