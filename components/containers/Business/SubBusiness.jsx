import { Box, VStack, HStack, Text } from "@chakra-ui/react";

import { BUSINESS } from "../../../mock/data";

const SubBusiness = () => {
  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <HStack
        ml={{ base: "20px", lg: "0px" }}
        // textAlign="justify"
        spacing={{ base: "0", lg: "10" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {BUSINESS?.map((data, index) => (
          <VStack
            key={index}
            fontSize={{ base: "12px", lg: "16px" }}
            borderColor="sgi.primary.100"
            mt={{ base: "20px!important", lg: 0 }}
          >
            <Text>{data.sub_title_1}</Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default SubBusiness;
