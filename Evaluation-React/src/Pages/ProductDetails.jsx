import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProducts(response.data);
      } catch (error) {
        console.log("Failed to fetch", error);
        setError("Failed to fetche");
      }
    };
    
    fetchProducts();
  }, [id]);
 
  console.log(product);
  return (
    <>
      <h1>Product Page</h1>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Card maxW="sm" key={product.id}>
          <CardBody>
            <Image
              src={product.image}
              alt={product.image}
              borderRadius="lg"
              boxSize="150px"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </Heading>

              <Text color="blue.600" fontSize="2xl">
                {product.price}
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
      </Grid>
    </>
  );
};

export default ProductDetails;
