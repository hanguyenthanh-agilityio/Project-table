import { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import Modal from "../Modal";
import { FormLabel, SimpleGrid } from "@chakra-ui/react";
import FormInput from "../FormInput";

// Types
import { Project } from "@/types";

interface FormModalProps {
  modalTitle: string;
  buttonLabel: string;
  isLoading?: boolean;
  projectItem?: Project;
  onClose: () => void;
  onConfirm: (data: Project) => void;
}

const FormModal = memo<FormModalProps>(
  ({
    modalTitle,
    buttonLabel,
    onClose,
    onConfirm,
    projectItem,
    isLoading,
  }: FormModalProps) => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm<Project>({
      defaultValues: projectItem,
    });

    const onSubmit: SubmitHandler<Project> = (data) => onConfirm(data);

    return (
      <Modal
        modalTitle={modalTitle}
        buttonAction={buttonLabel}
        ButtonClose="Cancel"
        isLoading={isLoading}
        isOpen={true}
        isConfirmModal={false}
        onClick={handleSubmit(onSubmit)}
        onClose={onClose}
        data-testid="modal"
      >
        <form>
          <SimpleGrid w="100%" columns={1}>
            {/* Project Name */}
            <FormInput
              label="Project Name"
              isInvalid={!!errors.projectName}
              inputName="projectName"
              register={register}
              type="string"
            />
            {/* Project manager (PM) */}
            <FormInput
              label="Project manager (PM)"
              isInvalid={!!errors.projectManager}
              inputName="projectManager"
              register={register}
              type="string"
            />
            {/* Resources */}
            <FormInput
              label="Resources"
              isInvalid={!!errors.resources}
              inputName="resources"
              register={register}
              type="string"
            />
            {/* Project timeline */}
            <FormLabel fontSize="16px">Project timeline</FormLabel>
            <FormInput
              label="From"
              isInvalid={!!errors.createdAt}
              inputName="resources"
              register={register}
              type="string"
            />
            <FormInput
              label="To"
              isInvalid={!!errors.finishAt}
              inputName="resources"
              register={register}
              type="string"
            />
            {/* Estimation */}
            <FormInput
              label="Estimation"
              isInvalid={!!errors.estimation}
              inputName="resources"
              register={register}
              type="string"
            />
          </SimpleGrid>
        </form>
      </Modal>
    );
  },
);

export default FormModal;
