import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps } from '@nextui-org/react';
import { ReactNode } from 'react';

interface IModalDelete extends ModalProps {
  onDelete: () => void;
  messageContent?: ReactNode;
}

function ModalDelete({ onDelete, onClose, ...passProps }: IModalDelete) {
  const handleDelete = () => {
    onDelete();
    onClose?.();
  };
  return (
    <Modal {...passProps}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
            <ModalBody></ModalBody>
            <ModalFooter>
              <Button color='primary' variant='light' onPress={onClose}>
                Hủy
              </Button>
              <Button color='danger' onClick={handleDelete}>
                Xóa
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalDelete;
