import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input';
import { useQueryClient } from '@tanstack/react-query';

const SaleOrderForm = ({ onClose, defaultValues }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues || {
      customer_id: '',
      items: [],
      paid: false,
      invoice_no: '',
      invoice_date: new Date().toISOString().slice(0, 10),
    },
  });

  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    // Mimic API call
    setTimeout(() => {
      queryClient.invalidateQueries('saleOrders');
      onClose();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Customer ID</FormLabel>
        <Controller
          name="customer_id"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Invoice No</FormLabel>
        <Controller
          name="invoice_no"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>Invoice Date</FormLabel>
        <Controller
          name="invoice_date"
          control={control}
          render={({ field }) => <DatePicker {...field} />}
        />
      </FormControl>
      {/* Add product multi-select and other fields */}
      <Button mt="4" colorScheme="blue" type="submit">Submit</Button>
    </form>
  );
};

export default SaleOrderForm;
