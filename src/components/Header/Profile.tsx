import { Avatar, Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { RiSettings5Line } from "react-icons/ri";

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
            {/* <Link
              href="/settings" 
              passHref
              pl="2" 
              borderLeft="1px" 
              borderColor="gray.300" 
              ml="2"  
            >
              <Icon
                fontSize="20"
                as={RiSettings5Line}
                _hover={{color: "yellow.400", zoom: "1.2"}}
              />
            </Link> */}
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