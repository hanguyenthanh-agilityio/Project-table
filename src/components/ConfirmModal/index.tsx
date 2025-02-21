import { memo } from "react";

// Components
import Modal from "../Modal";
import { Text } from "@chakra-ui/react";

interface ConfirmModalProps {
  description: string;
  buttonLabel: string;
  isLoading?: boolean;
  isOpen?: boolean;
  onClose: () => void;
  onDelete?: () => void;
}

const ConfirmModal = memo<ConfirmModalProps>(
  ({ description, buttonLabel, isOpen, onClose, onDelete, isLoading }) => (
    <Modal
      modalTitle="Delete project"
      buttonAction={buttonLabel}
      buttonClose="Cancel"
      isOpen={isOpen}
      isLoading={isLoading}
      isConfirmModal={true}
      onClick={onDelete}
      onClose={onClose}
      data-testid="modal"
    >
      <Text
        size="medium"
        color="text.default"
        textAlign="left"
        pb="5px"
        data-testid="confirm-modal"
      >
        {description}
      </Text>
    </Modal>
  ),
);

export default ConfirmModal;
