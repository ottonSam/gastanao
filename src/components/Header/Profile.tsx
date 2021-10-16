import { signOut} from 'next-auth/client';
import { Avatar, Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { RiLogoutCircleRLine } from "react-icons/ri";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
      ml="auto"
    >
      { showProfileData && (  
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>
            Samuel Ótton
            <button 
              type="button"
              onClick={() => signOut()}
            >
              <Link
                passHref
                pl="2" 
                borderLeft="1px" 
                borderColor="gray.300" 
                ml="2"  
              >
                <Icon
                  fontSize="20"
                  as={RiLogoutCircleRLine}
                  _hover={{color: "red.400", zoom: "1.2"}}
                />
              </Link>
            </button>
          </Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            ottonSam@gmail.com
          </Text>
        </Box>
      )}

      {/* <Link
        href="/settings" 
        passHref
      > */}
        <Avatar 
          size="md" 
          name="Samuel Ótton" 
          src="https://github.com/ottonsam.png"
          _hover={{zoom: "1.2"}}
        />
      {/* </Link> */}
    </Flex>
  );
}