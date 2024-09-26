import type { Meta, StoryObj } from "@storybook/react";

// Components
import LoadingIndicator from ".";

const meta = {
  title: "Example/LoadingIndicator",
  component: LoadingIndicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "The text for loading",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Loading...",
  },
};
