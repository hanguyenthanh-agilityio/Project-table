import type { Meta, StoryObj } from "@storybook/react";

// Components
import { SidebarContent } from ".";

const meta = {
  title: "Example/SidebarContent",
  component: SidebarContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClose: {
      description: "The onClose for sidebarContent",
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof SidebarContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClose: () => {},
  },
};
