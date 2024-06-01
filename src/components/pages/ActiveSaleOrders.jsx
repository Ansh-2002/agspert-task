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
  Spinner,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import useProductsData from '../../hooks/useProductsData';

const ActiveSaleOrders = () => {
  const orders = useProductsData();
if (!orders || orders.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" >
        <Spinner />
      </Box>
    );
  }
  return (
    <Box overflowX="auto">
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

export default ActiveSaleOrders;
