import {
  Box,
  VStack,
  Text,
  Wrap,
  WrapItem,
  Spacer,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { BRIEF } from "../../../mock/data";

const ListInterests = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  let spliceMain = 0;
  let spliceSecondary = !isMobile ? [4] : 0;
  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <VStack
        border="1px solid"
        borderColor="sgi.primary.100"
        px={{ base: "20px", lg: "32px" }}
        py={{ base: "20px", lg: "32px" }}
        alignItems="stretch"
        // textAlign="justify"
      >
        <Text
          borderColor="sgi.primary.100"
          fontWeight="bold"
          fontSize={{ base: "14px", lg: "20px" }}
        >
          {BRIEF.Interests_from_Investors}
        </Text>
        <Wrap
          my={{ base: "20px!important", lg: 0 }}
          direction={{ base: "column", lg: "row" }}
          px="8px"
        >
          <WrapItem flex="1" flexDirection="column">
            <UnorderedList mb="14px">
              {BRIEF.Interests_from_Investors_content.slice(
                spliceMain,
                spliceSecondary
              ).map((data, index) => (
                <ListItem key={index} fontSize={{ base: "12px", lg: "16px" }}>
                  {data}
                </ListItem>
              ))}
            </UnorderedList>
          </WrapItem>
          <Spacer flex={{ base: "0", lg: "0.5" }} />
          <WrapItem flex="1" flexDirection="column">
            <UnorderedList>
              {BRIEF.Interests_from_Investors_content.slice(
                spliceSecondary
              ).map((data, index) => (
                <ListItem key={index} fontSize={{ base: "12px", lg: "16px" }}>
                  {data}
                </ListItem>
              ))}
            </UnorderedList>
          </WrapItem>
        </Wrap>
      </VStack>
    </Box>
  );
};

export default ListInterests;
