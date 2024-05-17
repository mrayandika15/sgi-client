import { Box, VStack, HStack, Text } from "@chakra-ui/react";

import { ABOUT_US } from "../../../mock/data";

const SubAbout = () => {
  return (
    <Box>
      <HStack
        // textAlign="justify"
        spacing={{ base: "0" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {ABOUT_US?.map((data, index) => (
          <VStack
            key={index}
            fontSize={{ base: "12px", lg: "16px" }}
            borderColor="sgi.primary.100"
            mt={{ base: "20px!important", lg: 0 }}
          >
            <Text textColor="white" w="full">{data.sub_title_1}</Text>
            <Text textColor="white" w="full"> {data.sub_title_2}</Text>
            <Text textColor="white" w="full">
              {data.sub_title_3}
            </Text>

            <VStack fontSize="md" spacing="-1">
              {data.content?.map((content, index) => (
                <Text key={index} textColor="white">
                  {content}
                </Text>
              ))}
            </VStack>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default SubAbout;
