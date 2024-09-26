import { memo, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Components
import { Modal, FormInput, DateRangePicker } from "@/components";
import { Flex, FormLabel, SimpleGrid } from "@chakra-ui/react";

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
    projectItem,
    isLoading,
    onClose,
    onConfirm,
  }: FormModalProps) => {
    const {
      register,
      formState: { errors },
      handleSubmit,
      control,
      // setError,
      // clearErrors,
    } = useForm<Project>({
      defaultValues: projectItem,
    });

    const onSubmit: SubmitHandler<Project> = (data) => onConfirm(data);

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleChangeStartDate = (date: Date | null) => {
      setStartDate(date);
      // if (endDate && date && date > endDate) {
      //   setError("finishAt", {
      //     message: "Start date should not be greater than end date",
      //   });
      // } else {
      //   clearErrors("finishAt");
      // }
    };
    const handleChangeEndDate = (date: Date | null) => setEndDate(date);

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
            <Flex
              gap="3"
              pb="15px"
              fontSize="14px"
              justifyContent="space-between"
            >
              {/* Start date */}
              <Flex flexDir="column" alignItems="start">
                <Controller
                  name="createdAt"
                  control={control}
                  // rules={{ required: ERROR_MESSAGES.FIELD_REQUIRED }}
                  render={(props) => (
                    <DateRangePicker
                      label="From"
                      selected={startDate}
                      startDate={startDate}
                      endDate={endDate}
                      onChange={handleChangeStartDate}
                      {...props}
                    />
                  )}
                />
                {/* {errors.createdAt && (
                  <Text color="red.500" fontSize="sm">
                    {errors.createdAt.message}
                  </Text>
                )} */}
              </Flex>

              {/* End date */}
              <Flex flexDir="column" alignItems="start">
                <Controller
                  name="finishAt"
                  control={control}
                  // rules={{ required: ERROR_MESSAGES.FIELD_REQUIRED }}
                  render={(props) => (
                    <DateRangePicker
                      label="To"
                      selected={endDate}
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      onChange={handleChangeEndDate}
                      {...props}
                    />
                  )}
                />
                {/* {errors.finishAt && (
                  <Text color="red.500" fontSize="sm">
                    {errors.finishAt.message}
                  </Text>
                )} */}
              </Flex>
            </Flex>
            {/* Estimation */}
            <FormInput
              label="Estimation"
              isInvalid={!!errors.estimation}
              inputName="estimation"
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
