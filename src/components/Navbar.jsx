import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  HStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'white');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box bg={bgColor} px={4} py={2} color={color}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box fontWeight="bold" fontSize="lg">
            MyApp
          </Box>
          <HStack as="nav" spacing={4}>
            {isAuthenticated && (
              <Link to="/sale-orders" >
                Sale Orders
              </Link>
            )}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button onClick={toggleColorMode} mr={4}>
            Toggle Theme
          </Button>
          {isAuthenticated && (
            <Button onClick={handleLogout} colorScheme="teal">
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
