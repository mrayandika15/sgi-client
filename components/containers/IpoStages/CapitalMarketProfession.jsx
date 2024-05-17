import { Box, VStack, HStack, Text, Wrap } from "@chakra-ui/react";

import { IPO_STAGES } from "../../../mock/data";
import CardRoles from "./CardRoles";

const CapitalMarketProfession = () => {
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
        <VStack
          fontSize={{ base: "12px", lg: "16px" }}
          mt={{ base: "20px!important", lg: 0 }}
        >
          <Wrap>
            {IPO_STAGES.index.slice(0, 4).map((role, index) => (
              <CardRoles
                key={index}
                role={role}
                values={IPO_STAGES.roles[role]}
              />
            ))}
          </Wrap>
          <Wrap>
            {IPO_STAGES.index.slice(4, 8).map((role, index) => (
              <CardRoles
                key={index}
                role={role}
                values={IPO_STAGES.roles[role]}
              />
            ))}
          </Wrap>
          <Wrap>
            {IPO_STAGES.index.slice(8).map((role, index) => (
              <CardRoles
                key={index}
                role={role}
                values={IPO_STAGES.roles[role]}
              />
            ))}
          </Wrap>
          <Text>
            <Text as="span" fontWeight="bold">
              Note:
            </Text>{" "}
            {IPO_STAGES.note}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CapitalMarketProfession;
