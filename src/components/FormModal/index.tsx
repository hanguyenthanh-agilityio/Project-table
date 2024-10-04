import { memo, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Components
import { Modal, FormInput, DateRangePicker, Select } from "@/components";
import { Flex, FormControl, FormLabel, SimpleGrid } from "@chakra-ui/react";

// Types
import { Project } from "@/types";
import { SELECT_STATUS } from "@/constants";

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
      watch,
      setError,
      clearErrors,
    } = useForm<Project>({
      defaultValues: projectItem,
    });

    // Watch the start and end dates
    const createdAt = watch("createdAt");
    const finishAt = watch("finishAt");

    // Handler for form submission
    const onSubmit: SubmitHandler<Project> = (data) => {
      // Validate if start date is greater than end date
      if (createdAt && finishAt && new Date(createdAt) > new Date(finishAt)) {
        setError("finishAt", {
          type: "manual",
          message: "End date must be greater than start date.",
        });
        return; // Prevent form submission
      }
      onConfirm(data); // Call the onConfirm callback if validation passes
    };
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleChangeStartDate = (date: Date | null) => {
      setStartDate(date);
      clearErrors("createdAt"); // Clear any previous errors
    };

    const handleChangeEndDate = (date: Date | null) => {
      setEndDate(date);
      clearErrors("finishAt"); // Clear any previous errors
    };

    return (
      <Modal
        modalTitle={modalTitle}
        buttonAction={buttonLabel}
        buttonClose="Cancel"
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
              isRequired={true}
              required={true}
              isInvalid={!!errors.projectName}
              inputName="projectName"
              register={register}
              type="string"
            />
            {/* Project manager (PM) */}
            <FormInput
              label="Project manager (PM)"
              inputName="avatar"
              register={register}
              type="string"
            />
            {/* Status */}
            <FormControl mb="15px">
              <FormLabel>Status</FormLabel>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select options={SELECT_STATUS} {...field} />
                )}
              />
            </FormControl>
            {/* Resources */}
            <FormInput
              label="Resources"
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
              </Flex>

              {/* End date */}
              <Flex flexDir="column" alignItems="start">
                <Controller
                  name="finishAt"
                  control={control}
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
              </Flex>
            </Flex>
            {/* Estimation */}
            <FormInput
              label="Estimation"
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
