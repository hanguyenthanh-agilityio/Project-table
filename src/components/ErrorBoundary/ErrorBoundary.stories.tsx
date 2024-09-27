import type { Meta, StoryObj } from "@storybook/react";

// Components
import ErrorBoundary from ".";

const meta = {
  title: "Example/ErrorBoundary",
  component: ErrorBoundary,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The children for ErrorBoundary",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <h2>Oops, something went wrong!</h2>,
  },
};
