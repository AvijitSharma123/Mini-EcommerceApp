import React from 'react';
import { Box, Button, Text, Heading, Image } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react'

const products = [
//   { id: 'P001', name: 'Laptop', price: 1000.00, category: 'Electronics' },
//   { id: 'P002', name: 'Phone', price: 500.00, category: 'Electronics' },
//   { id: 'P003', name: 'T-Shirt', price: 20.00, category: 'Fashion' }
{ id: 'P001', name: 'Laptop', price: 1000.00, category: 'Electronics', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D' },
{ id: 'P002', name: 'Phone', price: 500.00, category: 'Electronics', image: 'https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726444800&semt=ais_hybrid' },
{ id: 'P003', name: 'T-Shirt', price: 20.00, category: 'Fashion', image: 'https://assets.ajio.com/medias/sys_master/root/20231128/ynB5/6565c242ddf7791519a25173/-473Wx593H-466833334-maroon-MODEL.jpg' },
{ id: 'P004', name: 'Headphones', price: 150.00, category: 'Electronics', image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww' },
{ id: 'P005', name: 'Smartwatch', price: 250.00, category: 'Electronics', image: 'https://www.boat-lifestyle.com/cdn/shop/files/Artboard5_18_1500x.png?v=1690528690' },
{ id: 'P006', name: 'Camera', price: 800.00, category: 'Electronics', image: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-58267-225157.jpg&fm=jpg' },
{ id: 'P007', name: 'Tablet', price: 300.00, category: 'Electronics', image: 'https://media.istockphoto.com/id/477596053/photo/samsung-galaxy-tab-3.jpg?s=612x612&w=0&k=20&c=3pQRcqxNy9Tn7M1QIi9Or5wkkdyBdcaobAofsp_xK28=' },
{ id: 'P008', name: 'Keyboard', price: 50.00, category: 'Electronics', image: 'https://www.cnet.com/a/img/resize/1b990bf2917a4d2a220ea2be6bb39e8eaca7d125/hub/2021/08/20/453e37bf-61cb-4e16-ad90-fd822bdc390a/keychron-k3-mechanical-keyboard.jpg?auto=webp&fit=crop&height=576&width=768' },
{ id: 'P009', name: 'Mouse', price: 25.00, category: 'Electronics', image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg' },
{ id: 'P010', name: 'Jacket', price: 100.00, category: 'Fashion', image: 'https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/thumb/1629717737612384e9619ceYDS_Product_4@2x.jpg' },
{ id: 'P011', name: 'Sneakers', price: 80.00, category: 'Fashion', image: 'https://ca-times.brightspotcdn.com/dims4/default/15a30ea/2147483647/strip/true/crop/6122x4081+0+1/resize/1440x960!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb3%2F10%2F10c245034893adf233fc1cf3071a%2F1351750-fi-sneaker-buyer-coolkicks-jlc-16185-021.jpg' },
{ id: 'P012', name: 'Jeans', price: 60.00, category: 'Fashion', image: 'https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?cs=srgb&dl=pexels-neosiam-603022.jpg&fm=jpg' },
{ id: 'P013', name: 'Hat', price: 15.00, category: 'Fashion', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEd6Z5K0paqS-ATqtzYPLlZ3oiNyuLkSovQ&s' },
{ id: 'P014', name: 'Sunglasses', price: 70.00, category: 'Fashion', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTSbD3EVLf3-ZESsX9YbUIknHrUKG2jc8sA&s' },
{ id: 'P015', name: 'Backpack', price: 40.00, category: 'Fashion', image: 'https://media.istockphoto.com/id/1339055637/photo/back-to-school-background-stationery-supplies-in-the-school-bag-banner-design-education-on.jpg?s=612x612&w=0&k=20&c=64U8pLGMWIV7ldiv23XaU5tGUuXqTrEemo_HEueIs40=' },
{ id: 'P016', name: 'Watch', price: 200.00, category: 'Accessories', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg' },
{ id: 'P017', name: 'Bracelet', price: 30.00, category: 'Accessories', image: 'https://silverpoetry.in/cdn/shop/products/MB21-2_e3241028-cec5-4de7-bdf4-eac35578bcd7_1800x.jpg?v=1725291613' },
{ id: 'P018', name: 'Ring', price: 120.00, category: 'Accessories', image: 'https://foroworld.com/wp-content/uploads/2024/05/FR672-1.jpg' },
{ id: 'P019', name: 'Necklace', price: 150.00, category: 'Accessories', image: 'https://rubans.in/cdn/shop/products/rubans-rose-gold-plated-handcrafted-zircon-stone-necklace-set-necklace-set-30922700357806.jpg?v=1640087214' },
{ id: 'P020', name: 'Earrings', price: 90.00, category: 'Accessories', image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?cs=srgb&dl=pexels-ashuphotography-1413420.jpg&fm=jpg' },
];

const ProductPage = ({ addToCart }) => {
  return (
    <Box p="4">
      <Heading as="h2" size="lg" mb="4">Product Catalog</Heading>
      {/* <Stack spacing={4}> */}
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" p="5" boxSize='sm' maxW='sm' overflow='hidden'>
            <Image src={product.image} alt='image' boxSize='250px'/>
            <Box>
            <Text>{product.name}</Text>
            <Text>Price: ${product.price}</Text>
            <Button
              colorScheme="blue"
              mt="2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
            </Box>
          </Box>
        ))}
      {/* </Stack> */}
      </Grid>
    </Box>
  );
};

export default ProductPage;


/**
 * 
 * <Grid templateColumns='repeat(5, 1fr)' gap={6}>

</Grid>
 */