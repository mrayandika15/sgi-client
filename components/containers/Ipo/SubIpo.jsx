import { Box, VStack, HStack, Text, Image, Wrap } from "@chakra-ui/react";

import { IPO } from "../../../mock/data";
import { IPO_IMG } from "../../../mock/image";
import CustomImage from "../../core/CustomImage";

const SubIpo = () => {
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
        {IPO?.map((data, index) => (
          <VStack
            key={index}
            fontSize={{ base: "12px", lg: "16px" }}
            borderColor="sgi.primary.100"
            mt={{ base: "20px!important", lg: 0 }}
          >
            <Text>{data.sub_title_1}</Text>
            <Box minH="150px" py={{ lg: "40px" }}>
              <CustomImage
                h="250px"
                src={IPO_IMG.basic}
                objectFit="contain"
                alt="IPO"
                cursor="pointer"
              />
            </Box>
            {data.notes.map((note, i) => (
              <Wrap w="full" key={i}>
                <Text w={{ base: "full", lg: "120px" }} fontWeight="bold">
                  {note[0]}
                </Text>
                <Text>{note[1]}</Text>
              </Wrap>
            ))}
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default SubIpo;
