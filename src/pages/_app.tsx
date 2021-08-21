import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp
