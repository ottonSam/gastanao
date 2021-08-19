import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack, Input as ChakraInput, FormControl, FormLabel, Checkbox, Text } from "@chakra-ui/react";
import Link from 'next/link';

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import React from "react";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px={["0", "6"]}
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6","8"]}
        >
          <Heading
            size="lg"
            fontWeight="normal"
          >
            Create a new expanse
          </Heading>

          <Divider
            my="6"
            borderColor="gray.700"
          />
          
          <VStack
            spacing="8"
          >
            <SimpleGrid
              minChildWidth="240px"
              spacing={["6", "8"]}
              w="100%"
            >
              <Input name="description" label="Description"/>
              <Input name="category" label="Category" />
            </SimpleGrid>
            <SimpleGrid
              minChildWidth="240px"
              spacing={["6", "8"]}
              w="100%"
            >
              <Input name="value" label="Value"/>

              <HStack> 
                <FormControl>
                  <FormLabel htmlFor="date">Date mm-dd-yyy</FormLabel>
                  <ChakraInput 
                    name="date"
                    id="date"
                    color="white"
                    type="number"
                    focusBorderColor="yellow.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{
                      bgColor: 'gray.900',
                    }}
                    size="lg"
                  />
                </FormControl>
                <Checkbox w="40" pt="7" colorScheme="orange" defaultIsChecked><Text>Is Today?</Text></Checkbox>
              </HStack>
            </SimpleGrid>
          </VStack>
          
          <Flex
            mt="8"
            justify="flex-end"
          >
            <HStack
              spacing="4"
            >
              <Link href="/expense" passHref>
                <Button
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme="orange"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}