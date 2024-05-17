import { Box, VStack, HStack, Text, Grid, GridItem } from "@chakra-ui/react";

import { ABOUT_US } from "../../../mock/data";

const VisiMisi = () => {
  return (
    <Box>
      <HStack
        spacing={{ base: "0", lg: "10" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {ABOUT_US?.map((data, index) => (
          <Grid
            // textAlign="justify"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            justifyContent="space-between"
            borderColor="sgi.primary.100"
            my={{ base: "20px!important", lg: 0 }}
            key={index}
          >
            <GridItem
              pr={{ base: "0px", lg: "100px" }}
              mb={{ base: "10px", lg: "23px" }}
              w="100%"
              h="AUTO"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Text
                mb="14px"
                borderColor="sgi.primary.100"
                fontWeight="bold"
                fontSize={{ base: "14px", lg: "20px" }}
                textColor="white"
              >
                {data.vision}
              </Text>
              <Text fontSize={{ base: "12px", lg: "16px" }} textColor="white">
                {data.vision_text}
              </Text>
            </GridItem>

            <GridItem
              pl={{ base: "0px", lg: "100px" }}
              mb={{ base: "10px", lg: "23px" }}
              w="100%"
              h="AUTO"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Text
                mb="14px"
                fontWeight="bold"
                fontSize={{ base: "14px", lg: "20px" }}
                textColor="white"
              >
                {data.mission}
              </Text>
              <Text fontSize={{ base: "12px", lg: "16px" }} textColor="white">
                {data.mision_text}
              </Text>
            </GridItem>

            <VStack fontSize="md" spacing="-1">
              {data.content?.map((content, index) => (
                <Text key={index}>{content}</Text>
              ))}
            </VStack>
          </Grid>
        ))}
      </HStack>
    </Box>
  );
};

export default VisiMisi;
