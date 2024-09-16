import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Select, Stack, Image, Flex, Spacer } from '@chakra-ui/react';

const availableDiscounts = [
  { id: 1, name: '10% off on Electronics', category: 'Electronics', discount: 0.1 },
  { id: 2, name: 'Buy 1 Get 1 Free on Fashion items', category: 'Fashion', discount: 0.5 },
  { id: 3, name: 'No discount on Accessories', category: 'Accessories', discount: 0.0 },
];

const currencyRates = {
  USD: 1,    // Base currency
  GBP: 0.73,
  EUR: 0.85,
};

const CartPage = ({ cart, onRemoveItem, onDecrementItem }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [discountsApplied, setDiscountsApplied] = useState(0);
  const [convertedTotal, setConvertedTotal] = useState(0);

  // Function to calculate the total price of items in the cart
  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Function to apply discounts based on item categories
  const applyDiscounts = () => {
    let totalDiscount = 0;
    cart.forEach((item) => {
      const discount = availableDiscounts.find(discount => discount.category === item.category);
      if (discount) {
        totalDiscount += item.price * item.quantity * discount.discount;
      }
    });
    setDiscountsApplied(totalDiscount);
    return totalDiscount;
  };

  // Calculate total after discount
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = applyDiscounts();
    return subtotal - discount;
  };

  // Convert the total to the selected currency
  useEffect(() => {
    const total = calculateTotal();
    const converted = total * currencyRates[selectedCurrency];
    setConvertedTotal(converted.toFixed(2)); // Limit to 2 decimal places
  }, [selectedCurrency,cart,calculateTotal]);

  return (
    <Box p="4">
      <Heading as="h2" size="lg" mb="4">Your Cart</Heading>

      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
      
        <Box>
            <Flex>
           <Box flex='1' p="4" mt="4">
          {cart.map((item, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p="4" mb="4">
                <Image src={item.image} alt='image' boxSize='250px'/>
              <Text>{item.name} - Quantity: {item.quantity}</Text>
              <Text>Category - {item.category}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>Total: ${(item.price * item.quantity).toFixed(2)}</Text>
              <Button
                colorScheme="red"
                onClick={() => onRemoveItem(item.id)}
                mt="2"
              >
                Remove All
              </Button>
              <Button
                colorScheme="yellow"
                onClick={() => onDecrementItem(item.id)}
                mt="2"
                ml="2"
              >
                Remove One
              </Button>
            </Box>
          ))}
          </Box>

        <Spacer />
          <Box flex='1' paddingRight={8}>
          <Box mt="8" p="4" borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb="4">Available Discounts</Heading>
            <Stack spacing={2}>
              {availableDiscounts.map((discount) => (
                <Text key={discount.id}>• {discount.name}</Text>
              ))}
            </Stack>
          </Box>

          {/* Checkout Section */}
          <Box mt="8" p="4" borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb="4">Checkout</Heading>
            <Text>Subtotal: ${calculateSubtotal().toFixed(2)}</Text>
            <Text>Discount Applied: -${discountsApplied.toFixed(2)}</Text>
            <Text>Final Total (in {selectedCurrency}): {convertedTotal} {selectedCurrency}</Text>

            {/* Currency Selector */}
            <Select
              mt="4"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </Select>

            <Button colorScheme="green" mt="4">Proceed to Checkout</Button>
          </Box>
          </Box>


          </Flex>
        </Box>
        
       
      )}
    </Box>
  );
};

export default CartPage;
