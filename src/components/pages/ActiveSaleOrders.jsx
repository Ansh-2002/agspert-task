import React from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import SaleOrderForm from '../components/SaleOrderForm';

const ActiveSaleOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="blue">+ Sale Order</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SaleOrderForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ActiveSaleOrders;
