import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Button, Heading, Spacer } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
        Mini E-commerce
        </Heading>
        <Spacer />
        <Button as={RouterLink} to="/" colorScheme="black" variant="ghost">
          Products
        </Button>
        <Button as={RouterLink} to="/cart" colorScheme="black" variant="ghost">
          Cart
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
