import { Box, VStack, HStack, Text, Grid, GridItem } from "@chakra-ui/react";

import { ABOUT_US } from "../../../mock/data";

const OurValue = () => {
  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <HStack
        ml={{ base: "20px", lg: "0px" }}
        spacing={{ base: "0", lg: "10" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {ABOUT_US?.map((data, index) => (
          <Grid
            textAlign="justify"
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
              >
                {data.Excellence}
              </Text>
              <Text fontSize={{ base: "12px", lg: "16px" }}>
                {data.Excellence_text}
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
                textColor="sgi.primary.900"
                fontWeight="bold"
                fontSize={{ base: "14px", lg: "20px" }}
              >
                {data.Innovative}
              </Text>
              <Text fontSize={{ base: "12px", lg: "16px" }}>
                {data.Innovative_text}
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

export default OurValue;
