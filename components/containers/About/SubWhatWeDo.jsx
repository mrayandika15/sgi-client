import { Box, VStack, HStack, Text } from "@chakra-ui/react";

import { ABOUT_US } from "../../../mock/data";

const SubWhatWeDo = () => {
  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <HStack
        ml={{ base: "20px", lg: "0px" }}
        textAlign="justify"
        spacing={{ base: "0", lg: "10" }}
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
            <Text>{data.sub_title_4}</Text>
            <Text>{data.sub_title_5}</Text>

            <VStack fontSize="md" spacing="-1">
              {data.content?.map((content, index) => (
                <Text key={index}>{content}</Text>
              ))}
            </VStack>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default SubWhatWeDo;
