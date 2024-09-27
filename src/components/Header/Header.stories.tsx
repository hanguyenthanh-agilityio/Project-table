import type { Meta, StoryObj } from "@storybook/react";

// Components
import Header from ".";

const meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title for header",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Project",
  },
};
