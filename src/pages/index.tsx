import { Flex, Button, Stack, Box, Divider } from '@chakra-ui/react'

import { Input } from '../components/Form/Input'
import { Logo } from '../components/Header/Logo'

export default function SingIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDir="column"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Box mb="3" direction="row">
          <Logo/>
          <Divider
            my="1"
            borderColor="gray.700"
          />
        </Box>
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail"/>
          <Input type="password" name="password" label="Senha" />
        </Stack>
        <Button
          types="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
