import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { useEffect } from "react";

import { Box, Button, Flex, Heading, Icon, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine} from "react-icons/ri";
import Link from 'next/link';

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import React from "react";
import { AllExpenses } from "../../components/Expense/AllExpenses";

export default function UserList() {

  const router = useRouter();
  const [session] = useSession();

  useEffect(() => {
    if (!(session)) {
      router.push('/')
    }
  }, [session]);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return session ? (
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
          p="8"
        >
          <Flex
            mb="8"
            justify="space-between"
            align="center"
          >
            <Heading
              size="lg"
              fontWeight="normal"
            >
              Your expenses
            </Heading>

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
          </Flex>

          <AllExpenses />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  ): null;
}