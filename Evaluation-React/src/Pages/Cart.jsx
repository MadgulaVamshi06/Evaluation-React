import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import {
  Center,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Failed to fetch", error);
        setError("Failed to fetche");
      }
    };
    fetchProducts();
  }, []);
  if (error) {
    return <div>Error : {error}</div>;
  }
  console.log(products);
  return (
    <>
      <h1>Product Page</h1>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((item) => (
          <Card maxW="sm" key={item.id}>
            <CardBody>
              <Image
                src={item.image}
                alt={item.image}
                borderRadius="lg"
                boxSize='150px'
              />
              <Stack mt="6" spacing="3">
                <Heading size="md"><Link to={`/products/${item.id}`}>{item.title}</Link></Heading>

                <Text color="blue.600" fontSize="2xl">
                 {item.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Product;
