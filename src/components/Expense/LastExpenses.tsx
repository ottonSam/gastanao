import { Box, Button, Heading, HStack, Icon, Link, useBreakpointValue, VStack} from "@chakra-ui/react";
import { RiAddLine, RiSearch2Line } from "react-icons/ri";

import { ExpenseItem } from "./ExpenseItem";

export function LastExpenses() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Heading
        size="lg"
        fontWeight="normal"
      >
        Last expenses
      </Heading>
      <HStack
        spacing="4"
      >
        <Link href="/expense/create" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="orange"
            leftIcon={
              <Icon
                as={RiAddLine}
                fontSize="20"
              />}
          >
            New expense
          </Button>
        </Link>
        <Link href="/expense" passHref>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="whiteAlpha"
            leftIcon={
              <Icon
                as={RiSearch2Line}
                fontSize="20"
              />}
          >
            View all expenses
          </Button>
        </Link>
      </HStack>
      <VStack spacing="2" align="left" mt="4"> 
        <ExpenseItem category="Comida" value={200} date="03-02-2021"/>
        <ExpenseItem category="Comida" value={200} date="03-02-2021"/>
        <ExpenseItem category="Encargo" value={200} date="03-02-2021"/>
        <ExpenseItem category="Comida" value={200} date="03-02-2021"/>
        <ExpenseItem category="Comida" value={200} date="03-02-2021"/>
      </VStack>
    </Box>
  );
}