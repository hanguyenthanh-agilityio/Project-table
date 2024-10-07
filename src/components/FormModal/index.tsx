import { memo, useCallback, useMemo } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Components
import { Modal, FormInput, DateRangePicker, Select } from "@/components";
import { Flex, FormControl, FormLabel, SimpleGrid } from "@chakra-ui/react";

// Types
import { Project } from "@/types";
import { SELECT_STATUS } from "@/constants";
import dayjs from "dayjs";

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
    // https://react-hook-form.com/docs/useform
    const {
      register,
      formState: { errors },
      handleSubmit,
      control,
      watch, // Render input value and for determining what to render by condition
      setError, // Used to set error for element
      clearErrors, // Delete errors based on name
      setValue, // Set value for element
    } = useForm<Project>({
      defaultValues: projectItem,
    });

    // Watch the start date and end date
    const startDateString = watch("createdAt");
    const endDateString = watch("finishAt");

    // Convert the string to Date | null
    const startDate = useMemo(
      () => (startDateString ? dayjs(startDateString).toDate() : null),
      [startDateString],
    );

    const endDate = useMemo(
      () => (endDateString ? dayjs(endDateString).toDate() : null),
      [endDateString],
    );

    const onSubmit: SubmitHandler<Project> = (data) => {
      // https://day.js.org/docs/en/query/is-after
      if (dayjs(startDate).isAfter(dayjs(endDate))) {
        setError("finishAt", {
          message: "Finish date must be greater than start date.",
        });
        return;
      }
      onConfirm(data);
    };

    // Handling start date changes
    const handleChangeStartDate = useCallback(
      (date: Date | null) => {
        clearErrors("createdAt");
        setValue("createdAt", dayjs(date).toString());
      },
      [clearErrors, setValue],
    );

    // Handling end date changes
    const handleChangeEndDate = useCallback(
      (date: Date | null) => {
        clearErrors("finishAt");
        setValue("finishAt", dayjs(date).toString());
      },
      [clearErrors, setValue],
    );

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
            <Flex justifyContent="space-between" pb="15px" fontSize="14px">
              <Flex gap="3" justifyContent="space-between">
                {/* Start date */}
                <Controller
                  name="createdAt"
                  control={control}
                  render={() => (
                    <DateRangePicker
                      label="From"
                      selected={startDate}
                      onChange={handleChangeStartDate}
                      errorMessage={
                        errors.createdAt ? errors.createdAt?.message : undefined
                      }
                    />
                  )}
                />
              </Flex>
              {/* End date */}
              <Flex flexDir="column" alignItems="start">
                <Controller
                  name="finishAt"
                  control={control}
                  render={() => (
                    <DateRangePicker
                      label="To"
                      selected={endDate}
                      onChange={handleChangeEndDate}
                      minDate={startDate || undefined}
                      errorMessage={
                        errors.finishAt ? errors.finishAt.message : undefined
                      }
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
