import { Image, VStack, Text } from "@chakra-ui/react";
import { Container } from "../core";
import { FOOTER_LOGO } from "../../mock/image";

function Footer() {
  return (
    <Container fullWidth bg="sgi.primary.800">
      <VStack py="5" spacing="5">
        <Image src={FOOTER_LOGO} h="72px" />
        <Text color="white" fontSize="md">
          Copyright Satu Global Investama{" "}
        </Text>
      </VStack>
    </Container>
  );
}

export default Footer;
