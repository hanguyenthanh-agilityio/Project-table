import React, { memo } from "react";

// Components
import {
  Button,
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface ModalProps {
  modalTitle: string;
  buttonAction?: string;
  ButtonClose?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  isLoading?: boolean;
  onClose: () => void;
  onClick?: () => void;
}

const Modal = memo<ModalProps>(
  ({
    modalTitle,
    ButtonClose,
    buttonAction,
    children,
    isOpen = false,
    isLoading,
    onClose,
    onClick,
  }: ModalProps) => {
    return (
      <ModalChakra isOpen={isOpen} onClose={onClose}>
        <ModalOverlay data-testid="modal-overlay" />
        <ModalContent data-testid="modal-content">
          {/* Header */}
          <ModalHeader
            textAlign="left"
            data-testid="title"
            borderBottom="1px solid #e0e2e4"
          >
            {modalTitle}
          </ModalHeader>
          <ModalCloseButton data-testid="modal-close-button" />
          {/* Body */}
          <ModalBody textAlign="center" bg="background.gray">
            {children}
          </ModalBody>
          {/* Footer */}
          <ModalFooter
            padding="20px 0"
            display="flex"
            justifyContent="right"
            gap="20px"
            borderTop="1px solid #e0e2e4"
          >
            <Button
              variant="default"
              onClick={onClose}
              data-testid="close-button"
            >
              {ButtonClose}
            </Button>
            <Button
              mr="20px"
              type="submit"
              data-testid="confirm-button"
              variant="primary"
              isLoading={isLoading}
              onClick={onClick}
            >
              {buttonAction}
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    );
  },
);

export default Modal;
