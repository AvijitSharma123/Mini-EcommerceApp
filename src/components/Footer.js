import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.700" color="white" py={4} mt="auto">
      <Flex justifyContent="center" alignItems="center">
        <Text>© 2024 My E-commerce, All rights reserved.</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
