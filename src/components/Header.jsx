import { Box, Button, Center, Text, Flex } from "@chakra-ui/react";
import '../style/Header.css';

function Header() {
  return (
    <Center>
      <Flex direction="column">
        <Box
          w="1200px"
          h="300px"
          backgroundImage="url('src/images/pexels-life-of-pix-7919.jpg')"
          backgroundSize="cover"
          borderRadius="8px"
          boxShadow="md"
          fontSize="30px"
          fontFamily="Arial"
          p={4}
          mb={30}
          mt={30}
        >
          <Center flexDir="column" h="100%">
            <Text fontWeight="bold" fontFamily="Arial" color="white" mb={20}>
              DOMINA EL TERRENO
            </Text>
            <Box>
              <Button
                colorScheme="blue"
                fontFamily="Arial"
                fontSize="18px"
                _hover={{
                  bg: "white",
                  color: "black",}}
                p="7px"  
                mr={2}
                className="transparent-button"
              >
                VER DETALLES
              </Button>
              <Button
                fontFamily="Arial"
                fontSize="18px"
                colorScheme="green"
                _hover={{
                  bg: "white",
                  color: "black",}}
                p="7px"  
                className="transparent-button"
              >
                VER VIDEOS
              </Button>
            </Box>
          </Center>
        </Box>
        <Box
          w="300px"
          h="300px"
          backgroundImage="url('src/images/pexels-life-of-pix-7919.jpg')"
          backgroundSize="cover"
          borderRadius="8px"
          boxShadow="md"
          p={4}
        >
          <Center flexDir="column" h="100%">
            <Text fontSize="25px" fontFamily="Arial" fontWeight="bold" color="white" mb={20}>
              DOMINA EL TERRENO
            </Text>
            <Box>
              <Button
                fontFamily="Arial"
                fontSize="18px"
                colorScheme="blue"
                _hover={{
                  bg: "white",
                  color: "black",}}
                p="7px"
                mr={2}
                className="transparent-button"
              >
                VER DETALLES
              </Button>
              <Button
                fontFamily="Arial"
                fontSize="18px"
                colorScheme="green"
                _hover={{
                  bg: "white",
                  color: "black",}}
                className="transparent-button"
                p="7px"
              >
                VER VIDEOS
              </Button>
            </Box>
          </Center>
        </Box>
      </Flex>
    </Center>
  );
}

export default Header;
