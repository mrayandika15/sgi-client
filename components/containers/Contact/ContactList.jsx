// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import {
  Box,
  Image,
  VStack,
  HStack,
  Text,
  Grid,
  GridItem,
  Flex,
  Show,
  Hide,
} from "@chakra-ui/react";

import { CONTACT_US } from "../../../mock/data";

const ContactList = () => {
  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <HStack
        ml={{ base: "20px", lg: "0px" }}
        spacing={{ base: "0", lg: "10" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {CONTACT_US?.map((data, index) => (
          <Grid
            // textAlign="justify"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            justifyContent="space-between"
            borderColor="sgi.primary.100"
            my={{ base: "20px!important", lg: 0 }}
            key={index}
          >
            {/* Information Seaction */}

            <GridItem
              pr={{ base: "0px", lg: "100px" }}
              mb={{ base: "10px", lg: "40px" }}
              w="100%"
              h="100%"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Text
                mb="14px"
                borderColor="sgi.primary.100"
                fontWeight="bold"
                fontSize={{ base: "12px", lg: "18px" }}
              >
                {data.sgi}
              </Text>

              <Flex
                mb={{ base: "12px", lg: "14px" }}
                alignItems={{ base: "normal", lg: "center" }}
              >
                <Image
                  src="/icon/office.png"
                  alt="office"
                  w={{ base: "24px", lg: "32px" }}
                  h={{ base: "24px", lg: "32px" }}
                />
                <Flex direction="column">
                  <Text
                    fontSize={{ base: "12px", lg: "16px" }}
                    ml={{ base: "15px", lg: "21px" }}
                    mb={{ base: "6px", lg: "0px" }}
                  >
                    {data.office_sgi}
                  </Text>
                </Flex>
              </Flex>

              <Flex
                mb={{ base: "12px", lg: "14px" }}
                alignItems={{ base: "normal", lg: "center" }}
              >
                <Image
                  src="/icon/map.png"
                  alt="map"
                  w={{ base: "24px", lg: "32px" }}
                  h={{ base: "24px", lg: "32px" }}
                />

                <Text
                  fontSize={{ base: "12px", lg: "16px" }}
                  ml={{ base: "15px", lg: "21px" }}
                >
                  {data.map_sgi}
                </Text>
              </Flex>

              <Flex
                mb={{ base: "12px", lg: "14px" }}
                alignItems={{ base: "normal", lg: "center" }}
              >
                <Image
                  src="/icon/phone.png"
                  alt="phone"
                  w={{ base: "24px", lg: "32px" }}
                  h={{ base: "24px", lg: "32px" }}
                />

                <Flex direction="column">
                  <Text
                    fontSize={{ base: "12px", lg: "16px" }}
                    ml={{ base: "15px", lg: "21px" }}
                    mb={{ base: "6px", lg: "0px" }}
                  >
                    {data.phone_sgi}
                  </Text>
                </Flex>
              </Flex>

              <Flex
                alignItems={{ base: "center", lg: "center" }}
                mb={{ base: "12px", lg: "14px" }}
              >
                <Image
                  src="/icon/mail.png"
                  alt="mail"
                  w={{ base: "24px", lg: "32px" }}
                  h={{ base: "24px", lg: "32px" }}
                />

                <Text
                  fontSize={{ base: "12px", lg: "16px" }}
                  ml={{ base: "15px", lg: "21px" }}
                >
                  {data.mail_sgi}
                </Text>
              </Flex>
            </GridItem>

            <GridItem
              pl={{ base: "0px", lg: "100px" }}
              pr={{ base: "0px", lg: "0px" }}
              mb="23px"
              w="100%"
              h="100%"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Text
                mb="14px"
                borderColor="sgi.primary.100"
                fontWeight="bold"
                fontSize={{ base: "12px", lg: "18px" }}
              >
                {data.ess}
              </Text>

              <Flex
                alignItems={{ base: "center", lg: "center" }}
                mb={{ base: "12px", lg: "14px" }}
              >
                <Image
                  src="/icon/office.png"
                  alt="office"
                  w={{ base: "24px", lg: "32px" }}
                  h={{ base: "24px", lg: "32px" }}
                />

                <Text
                  fontSize={{ base: "12px", lg: "16px" }}
                  ml={{ base: "15px", lg: "21px" }}
                >
                  {data.office_ess}
                </Text>
              </Flex>

              <Flex
                alignItems={{ base: "center", lg: "center" }}
                mb={{ base: "12px", lg: "14px" }}
              >
                <Image
                  src="/icon/map.png"
                  alt="map"
                  w={{ base: "24px", lg: "32px" }}
                  h={{ base: "24px", lg: "32px" }}
                />

                <Text
                  fontSize={{ base: "12px", lg: "16px" }}
                  ml={{ base: "15px", lg: "21px" }}
                >
                  {data.map_ess}
                </Text>
              </Flex>

              <Flex
                alignItems={{ base: "center", lg: "center" }}
                mb={{ base: "12px", lg: "14px" }}
              >
                <Image
                  src="/icon/phone.png"
                  alt="phone"
                  w={{ base: "24px", lg: "32px" }}
                  h={{ base: "24px", lg: "32px" }}
                />

                <Text
                  fontSize={{ base: "12px", lg: "16px" }}
                  ml={{ base: "15px", lg: "21px" }}
                >
                  {data.phone_ess}
                </Text>
              </Flex>
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

export default ContactList;
