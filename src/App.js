import React, { useState } from 'react';
import { Alert, Box, Button, ChakraProvider, CloseButton, useDisclosure } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';






function App() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
  
    alert("Item added to Cart")
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        // If the product already exists, increase the quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add the product to the cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove all quantity of an item from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Function to remove one quantity of an item from the cart
  const decrementItem = (productId) => {
    setCart((prevCart) => 
      prevCart.map(item => 
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage 
                cart={cart} 
                onRemoveItem={removeFromCart} 
                onDecrementItem={decrementItem} 
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;

