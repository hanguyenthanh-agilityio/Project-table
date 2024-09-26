import type { Meta, StoryObj } from "@storybook/react";
import { Button, useDisclosure } from "@chakra-ui/react";

// Components
import ConfirmModal from ".";
import FormModal from "../FormModal";

const meta = {
  title: "Example/ConfirmModal",
  component: ConfirmModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    description: {
      description: "Description main content in form",
      control: { type: "text" },
    },
    buttonLabel: {
      description: "The button for ConfirmModal",
      control: { type: "text" },
    },
    onClose: {
      description: "The action close modal",
      control: { type: "object" },
    },
    onDelete: {
      description: "The action handle delete item",
      control: { type: "object" },
    },
    isOpen: {
      description: "The action open modal",
      control: { type: "boolean" },
    },
    isLoading: {
      description: "The loading for confirmModal",
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    description:
      "Are you sure you want to delete Karla Hyatt? If you delete, it will be permanently lost.",
    buttonLabel: "Delete",
    isOpen: true,
    onClose: () => {},
  },
  render: () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        {isOpen && (
          <FormModal
            modalTitle="Delete project"
            buttonLabel="Delete"
            onClose={onClose}
            onConfirm={() => {}}
          />
        )}
      </>
    );
  },
};
