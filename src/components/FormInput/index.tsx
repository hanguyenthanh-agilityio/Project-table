import { ERROR_MESSAGES } from "@/constants/error-message";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { memo } from "react";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps {
  isInvalid?: boolean;
  label: string;
  inputName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
}

const FormInput = memo<FormInputProps>(
  ({
    label,
    isInvalid,
    inputName,
    register,
    type,
    defaultValue,
    placeholder,
    isRequired = false,
  }: FormInputProps) => {
    return (
      <FormControl mb="15px" isInvalid={isInvalid}>
        <FormLabel mb="5px" fontSize="14px">
          {label} {isRequired && <span style={{ color: "#5e5adb" }}>*</span>}
        </FormLabel>
        <Input
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={type}
          {...register(inputName, { required: true })}
        />
        <FormErrorMessage>
          {isInvalid && ERROR_MESSAGES.FIELD_REQUIRED}
        </FormErrorMessage>
      </FormControl>
    );
  },
);

export default FormInput;
