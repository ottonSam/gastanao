import { Box, Flex, SimpleGrid, } from "@chakra-ui/react";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { YearExpenses } from "../../components/Graphic/YearExpenses";
import { MonthExpenses } from "../../components/Graphic/MonthExpenses";
import { LastExpenses } from "../../components/Expense/LastExpenses";


export default function DashBoard() {

  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px={["0", "6"]}
      >
        <Sidebar />

        <Flex 
          flex="1"
          direction="column"
        > 
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
            mb="6"
          >
            <YearExpenses />
            <SimpleGrid 
            flex="1"
            gap="2"
            direction="column"
            minChildWidth="320px"
            > 
              <MonthExpenses />
              <LastExpenses />
            </SimpleGrid>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}