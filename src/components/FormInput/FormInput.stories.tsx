import type { Meta, StoryObj } from "@storybook/react";

// Components
import FormInput from ".";
import { useForm, UseFormRegister } from "react-hook-form";

interface FormData {
  name: string;
}

const mockRegister: UseFormRegister<FormData> = (name) => {
  return {
    name,
    onBlur: async () => {
      return Promise.resolve();
    },
    onChange: async () => {
      return Promise.resolve();
    },
    ref: () => {},
  };
};

const meta = {
  title: "Example/FormInput",
  component: FormInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isInvalid: {
      description: "The isInvalid for Form",
      control: { type: "boolean" },
    },
    label: {
      description: "The label for Form",
      control: { type: "text" },
    },
    inputName: {
      description: "The inputName for Form",
      control: { type: "text" },
    },
    type: {
      description: "The type for Form",
      control: { type: "text" },
    },
    defaultValue: {
      description: "The defaultValue for Form",
      control: { type: "text" },
    },
    placeholder: {
      description: "The placeholder for Form",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => {
  const { register } = useForm();
  return <FormInput {...args} register={register} />;
};

export const Primary: Story = {
  render: Template,
  args: {
    label: "Name",
    inputName: "name",
    placeholder: "Product Name",
    register: mockRegister,
    isInvalid: false,
    type: "text",
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    label: "Name",
    inputName: "name",
    placeholder: "Product Name",
    register: mockRegister,
    isInvalid: true,
    type: "text",
  },
};
