import { PARTNERSHIPS_IMG } from "../../../mock/image";
import { Box, Image, VStack, HStack } from "@chakra-ui/react";

const Partnerships = () => {
  return (
    <VStack
      maxW="container.xl"
      mx="auto"
      p="10"
      spacing={{ base: "-3", sm: "2", md: "10" }}
    >
      <HStack justifyContent="center">
        {PARTNERSHIPS_IMG?.slice(0, 2).map((img, index) => (
          <Box minW="150px" minH="150px" key={index}>
            <Image
              w="300px"
              h="150px"
              src={img}
              objectFit="contain"
              cursor="pointer"
            />
          </Box>
        ))}
      </HStack>
      <HStack
        justifyContent="space-evenly"
        wrap={{ base: "wrap", md: "nowrap" }}
      >
        {PARTNERSHIPS_IMG?.slice(2).map((img, index) => (
          <Box flex={{ base: "1 0 39%", md: "1" }} key={index}>
            <Image
              src={img}
              w="250px"
              h={{ base: "80px", lg: "100px" }}
              objectFit="contain"
              cursor="pointer"
            />
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

export default Partnerships;
