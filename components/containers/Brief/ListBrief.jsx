import {
  Box,
  HStack,
  Text,
  Wrap,
  WrapItem,
  UnorderedList,
  ListItem,
  Spacer,
} from "@chakra-ui/react";

import { BRIEF } from "../../../mock/data";

const ListBrief = () => {
  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <HStack
        ml={{ base: "20px", lg: "0px" }}
        spacing={{ base: "0", lg: "10" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
        // textAlign="justify"
      >
        <Wrap
          my={{ base: "20px!important", lg: 0 }}
          direction={{ base: "column", lg: "row" }}
          px="8px"
        >
          <WrapItem flex="1" flexDirection="column">
            <Text
              mb="14px"
              borderColor="sgi.primary.100"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "20px" }}
            >
              {BRIEF.Fundraising_over_Public_Offering}
            </Text>
            <UnorderedList mb="14px">
              {BRIEF.Fundraising_over_Public_Offering_content.map(
                (data, index) => (
                  <ListItem key={index} fontSize={{ base: "12px", lg: "16px" }}>
                    {data}
                  </ListItem>
                )
              )}
            </UnorderedList>
            <Text fontSize={{ base: "12px", lg: "16px" }}>
              {BRIEF.Fundraising_over_Public_Offering_note}
            </Text>
          </WrapItem>
          <Spacer flex={{ base: "0.2", lg: "0.5" }} />
          <WrapItem flex="1" flexDirection="column">
            <Text
              mb="14px"
              textColor="sgi.primary.900"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "20px" }}
            >
              {BRIEF.Fundraising_over_Limited_Offering}
            </Text>
            <UnorderedList mb="14px">
              {BRIEF.Fundraising_over_Limited_Offering_content.map(
                (data, index) => (
                  <ListItem key={index} fontSize={{ base: "12px", lg: "16px" }}>
                    {data}
                  </ListItem>
                )
              )}
            </UnorderedList>
            <Text fontSize={{ base: "12px", lg: "16px" }}>
              {BRIEF.Fundraising_over_Limited_Offering_note}
            </Text>
          </WrapItem>
        </Wrap>
      </HStack>
    </Box>
  );
};

export default ListBrief;
