import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react';
import { RiMenuLine } from 'react-icons/ri';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import { Logo } from './Logo';
import { Profile } from './Profile';

export function Header() {

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >

      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}

      <Logo />
      
      <Profile showProfileData={isWideVersion} />
      
    </Flex>
  );
}