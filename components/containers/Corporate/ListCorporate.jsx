import {
  Box,
  VStack,
  HStack,
  Text,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { CORPORATE } from "../../../mock/data";

const ListCorporate = () => {
  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <HStack
        ml={{ base: "20px", lg: "0px" }}
        spacing={{ base: "0", lg: "10" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {CORPORATE?.map((data, index) => (
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
              mb="23px"
              w="100%"
              h="100%"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Text
                mb="14px"
                borderColor="sgi.primary.100"
                fontWeight="bold"
                fontSize={{ base: "14px", lg: "20px" }}
              >
                {data.PreIPOFinancing}
              </Text>
              <UnorderedList>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PreIPOFinancing_text_1}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PreIPOFinancing_text_2}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PreIPOFinancing_text_3}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PreIPOFinancing_text_4}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PreIPOFinancing_text_5}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PreIPOFinancing_text_6}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PreIPOFinancing_text_7}
                </ListItem>
              </UnorderedList>
            </GridItem>

            <GridItem
              pl={{ base: "0px", lg: "100px" }}
              mb="23px"
              w="100%"
              h="100%"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Text
                mb="14px"
                textColor="sgi.primary.900"
                fontWeight="bold"
                fontSize={{ base: "14px", lg: "20px" }}
              >
                {data.InitialPublicOffering}
              </Text>
              <UnorderedList>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.InitialPublicOffering_text_1}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.InitialPublicOffering_text_2}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.InitialPublicOffering_text_3}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.InitialPublicOffering_text_4}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.InitialPublicOffering_text_5}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.InitialPublicOffering_text_6}
                </ListItem>
              </UnorderedList>
            </GridItem>

            <GridItem
              pr={{ base: "0px", lg: "100px" }}
              mb="23px"
              w="100%"
              h="100%"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Text
                mb="14px"
                borderColor="sgi.primary.100"
                fontWeight="bold"
                fontSize={{ base: "14px", lg: "20px" }}
              >
                {data.PostIPO}
              </Text>

              <UnorderedList>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PostIPO_text_1}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PostIPO_text_2}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PostIPO_text_3}
                </ListItem>
                <ListItem fontSize={{ base: "12px", lg: "16px" }}>
                  {data.PostIPO_text_4}
                </ListItem>
              </UnorderedList>
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

export default ListCorporate;
