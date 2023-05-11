import {
  Box,
  VStack,
  HStack,
  Text,
  Wrap,
  WrapItem,
  ListItem,
  OrderedList,
  Spacer,
} from "@chakra-ui/react";

import { BRIEF } from "../../../mock/data";

const ListAdvantage = () => {
  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <HStack
        ml={{ base: "20px", lg: "0px" }}
        spacing={{ base: "0", lg: "10" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
        textAlign="justify"
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
              {BRIEF.Advantages_for_the_company}
            </Text>
            <OrderedList mb="14px">
              {BRIEF.Advantages_for_the_company_content.map((data, index) => (
                <ListItem key={index} fontSize={{ base: "12px", lg: "16px" }}>
                  {data}
                </ListItem>
              ))}
            </OrderedList>
          </WrapItem>
          <Spacer flex={{ base: "0.2", lg: "0.5" }} />
          <WrapItem flex="1" flexDirection="column">
            <Text
              mb="14px"
              textColor="sgi.primary.900"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "20px" }}
            >
              {BRIEF.Advantages_for_the_Shareholders}
            </Text>
            <OrderedList mb="14px">
              {BRIEF.Advantages_for_the_Shareholders_content.map(
                (data, index) => (
                  <ListItem key={index} fontSize={{ base: "12px", lg: "16px" }}>
                    {data}
                  </ListItem>
                )
              )}
            </OrderedList>
          </WrapItem>
        </Wrap>
      </HStack>
    </Box>
  );
};

export default ListAdvantage;
