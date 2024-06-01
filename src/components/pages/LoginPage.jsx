import React from 'react';
import {
  Box,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = data => {
    console.log(data, 'data');
    login(data.username, data.password).then(isAuthenticated => {
      if (isAuthenticated) {
        navigate('/sale-orders');
      } else {
        toast({
          title: 'Invalid credentials',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    });

    // navigate('/sale-orders');
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input {...register('username')} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register('password')} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
