import { signIn } from 'next-auth/client';
import { Flex, Button, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

export function SingIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDir="column"
    >
      <Box maxWidth="700px" p="6" fontSize={["32", "40"]}>
        <Text>
          Login to access platform features   
          <Link href="/graphic">
            <Button
              ml="1"
              colorScheme="orange"
              size="lg"
              fontSize="24"
              onClick={() => signIn('github')}
            >
              Login with Github
            </Button>
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}
