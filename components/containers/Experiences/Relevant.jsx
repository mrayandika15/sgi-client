import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { RELEVANT_EXPERIENCES } from "../../../mock/data";

const RelevantExperiences = () => {
  const initialState = 3;
  const maxState = RELEVANT_EXPERIENCES.length;

  const [next, setNext] = useState(initialState);

  const displayedData = RELEVANT_EXPERIENCES.slice(0, next);

  const handleMoreData = () => {
    setNext(next + 3);
    if (maxState - next <= 3) {
      setNext(maxState);
    }
    if (next === maxState) {
      setNext(initialState);
    }
  };

  return (
    <Box px={{ base: "40px", md: "150px" }} pb="10">
      <SimpleGrid
        spacing={{ base: "0", lg: "10" }}
        pt="10"
        columns={{ base: 1, lg: 3 }}
      >
        {displayedData?.map((data) => (
          <VStack
            key={data.id}
            border="1px solid"
            borderColor="sgi.primary.100"
            my={{ base: "20px!important", lg: 0 }}
            pb="12"
          >
            <Box p="10" minW="230px" minH="100px">
              <Image src={data.image} w="300px" h="100px" objectFit="contain" />
            </Box>
            <Heading fontSize="lg" px="5" textAlign="center">
              {data.heading}
            </Heading>
            <VStack fontSize="md" spacing="-1" textAlign="center">
              {data.content?.map((content, index) => (
                <Text key={index}>{content}</Text>
              ))}
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>
      <Button onClick={handleMoreData} mt="10">
        See {next === maxState ? "less" : "more"}
      </Button>
    </Box>
  );
};

export default RelevantExperiences;
