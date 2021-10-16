import { useRouter } from 'next/router';
import {  useSession,  } from 'next-auth/client';
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { YearExpenses } from "../../components/Graphic/YearExpenses";
import { MonthExpenses } from "../../components/Graphic/MonthExpenses";
import { LastExpenses } from "../../components/Expense/LastExpenses";
import { useEffect } from 'react';


export default function DashBoard() {
  const router = useRouter();
  const [session] = useSession();

  useEffect(() => {
    if (!(session)) {
      router.push('/')
    }
  }, [session]);

  return session ? (
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
  ) : null;
}