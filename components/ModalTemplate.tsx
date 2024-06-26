import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

interface ModalTemplateProps {
  label?: string;
  visible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode; 
  canClose?: boolean;
}

export default function ModalTemplate({
  visible,
  label,
  onClose,
  children,
  canClose = true
}: ModalTemplateProps) {

  return (
    <Modal 
      onClose={canClose ? onClose : undefined}
      isOpen={visible} 
      placement={'center'}
    >
      <ModalContent>
        <ModalHeader>{label}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}
