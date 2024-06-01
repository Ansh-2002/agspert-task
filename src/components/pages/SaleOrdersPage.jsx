import React, { useState } from 'react';
import {
  Box,
  Button,
  useDisclosure,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import ActiveSaleOrders from './ActiveSaleOrders';
import CompletedSaleOrders from './CompletedSaleOrders';
import SaleOrderForm from '../SaleOrderForm';
import { AddIcon } from '@chakra-ui/icons';

const SaleOrdersPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('gray.100', 'gray.900');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <Box p="4" bg={bg} minHeight="100vh">
      <HStack spacing={4} mb={4}>
        <Button
          onClick={() => setActiveTab('active')}
          isActive={activeTab === 'active'}
        >
          Active Sale Orders
        </Button>
        <Button
          onClick={() => setActiveTab('completed')}
          isActive={activeTab === 'completed'}
        >
          Completed Sale Orders
        </Button>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          ml="auto"
          // onClick={onOpen}
          onClick={handleOpen}
        >
          + Sale Order
        </Button>
      </HStack>
      {activeTab === 'active' ? <ActiveSaleOrders /> : <CompletedSaleOrders />}
      {isOpen && <SaleOrderForm  isOpen={isModalOpen} onClose={handleClose} />}
    </Box>
  );
};

export default SaleOrdersPage;
