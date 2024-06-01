import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import Select from 'react-select';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const products = [
  { value: 'product1', label: 'Product 1' },
  { value: 'product2', label: 'Product 2' },
  { value: 'product3', label: 'Product 3' },
];

const SaleOrderForm = ({ isOpen, onClose, defaultValues }) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: defaultValues || {
      customer_id: '',
      items: [],
      paid: false,
      invoice_no: '',
      invoice_date: new Date().toISOString().slice(0, 10),
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'items',
  });

  const selectedProducts = watch('selectedProducts');

  const onSubmit = data => {
    console.log('Form submitted:', data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sale Order Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb="4">
              <FormLabel>Customer ID</FormLabel>
              <Controller
                name="customer_id"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Invoice No</FormLabel>
              <Controller
                name="invoice_no"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Invoice Date</FormLabel>
              <Controller
                name="invoice_date"
                control={control}
                render={({ field }) => <Input type="date" {...field} />}
              />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>All Products</FormLabel>
              <Controller
                name="selectedProducts"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    isMulti
                    options={products}
                    onChange={selectedOptions => {
                      field.onChange(selectedOptions);
                      append(
                        selectedOptions.map(option => ({
                          product: option.value,
                          quantity: '',
                          rate: '',
                        }))
                      );
                    }}
                    colorScheme="black"
                  />
                )}
              />
            </FormControl>

            {fields.map((item, index) => (
              <Box
                key={item.id}
                mb="4"
                p="4"
                borderWidth="1px"
                borderRadius="md"
              >
                <Text mb="2">
                  {index + 1}.{' '}
                  {products.find(p => p.value === item.product)?.label}
                </Text>
                <HStack spacing="4">
                  <FormControl>
                    <FormLabel>Selling Rate</FormLabel>
                    <Controller
                      name={`items[${index}].rate`}
                      control={control}
                      render={({ field }) => <Input {...field} />}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Total Items</FormLabel>
                    <Controller
                      name={`items[${index}].quantity`}
                      control={control}
                      render={({ field }) => <Input {...field} />}
                    />
                  </FormControl>
                </HStack>
              </Box>
            ))}
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;
