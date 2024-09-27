import type { Meta, StoryObj } from "@storybook/react";
import { Button, useDisclosure } from "@chakra-ui/react";
import FormModal from ".";

// Components

const meta = {
  title: "Example/FormModal",
  component: FormModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    modalTitle: {
      description: "The main title of form",
      control: { type: "text" },
    },
    buttonLabel: {
      description: "The button for FormModal",
      control: { type: "text" },
    },
    projectItem: {
      description: "The projectItem for FormModal",
      control: { type: "text" },
    },
    onClose: {
      description: "The action close modal",
      control: { type: "object" },
    },
    isLoading: {
      description: "The loading for FormModal",
      control: { type: "boolean" },
    },
    onConfirm: {
      description: "The action confirm when click button",
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof FormModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    modalTitle: "Product",
    buttonLabel: "Confirm",
    onClose: () => {},
    onConfirm: () => {},
  },
  render: (args) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        {isOpen && <FormModal {...args} onClose={onClose} />}
      </>
    );
  },
};
