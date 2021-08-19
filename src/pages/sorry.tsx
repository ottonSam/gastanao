import { Flex, Button, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

export default function SingIn() {
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
          Sorry bro this feature hasn't been developed yet. please go back to   
          <Link href="/graphic">
            <Button
              ml="1"
              colorScheme="orange"
              size="lg"
              fontSize="24"
            >
              Graphic page
            </Button>
          </Link>
        </Text>
      </Box>
    </Flex>
  )
}
