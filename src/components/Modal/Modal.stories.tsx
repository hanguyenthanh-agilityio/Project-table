import type { Meta, StoryObj } from "@storybook/react";
import { Button, useDisclosure } from "@chakra-ui/react";

// Components
import Modal from ".";

const meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    modalTitle: {
      description: "The title of modal",
      control: { type: "text" },
    },
    buttonAction: {
      description: "The button for modal action",
      control: { type: "text" },
    },
    buttonClose: {
      description: "The button close modal",
      control: { type: "text" },
    },
    onClose: {
      description: "The action close modal",
      control: { type: "object" },
    },
    isOpen: {
      description: "The action open modal",
      control: { type: "boolean" },
    },
    isLoading: {
      description: "The loading for Modal",
      control: { type: "boolean" },
    },
    isConfirmModal: {
      description: "THe action true if it is confirm modal",
      control: { type: "boolean" },
    },
    onClick: {
      description: "The action click button action",
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    modalTitle: "Add new project",
    buttonAction: "Confirm",
    buttonClose: "Cancel",
    isOpen: true,
    isConfirmModal: false,
    onClose: () => {},
  },
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        {isOpen && <Modal {...args} onClose={onClose} />}
      </>
    );
  },
};

export const Secondary: Story = {
  args: {
    modalTitle: "Delete project",
    buttonAction: "Delete",
    buttonClose: "Cancel",
    isOpen: true,
    isConfirmModal: true,
    onClose: () => {},
  },
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        {isOpen && <Modal {...args} onClose={onClose} />}
      </>
    );
  },
};
