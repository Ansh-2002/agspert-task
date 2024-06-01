import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const CompletedSaleOrders = () => {
  const orders = [
    {
      id: 1,
      customerName: 'Spider',
      price: '₹100',
      lastModified: '20/5/2024 (1:07 PM)',
    },
    {
      id: 2,
      customerName: 'Spider',
      price: '₹210',
      lastModified: '23/5/2024 (11:31 PM)',
    },
  ];

  return (
    <Box overflowX="auto">
        {/* completed */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price (₹)</Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map(order => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.price}</Td>
              <Td>{order.lastModified}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  variant="outline"
                  aria-label="Edit Order"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CompletedSaleOrders;
