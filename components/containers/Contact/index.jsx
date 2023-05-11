import { Container, DividerImage, Line, HeadingWithLine } from "../../core";
import { DIVIDER_IMG } from "../../../mock/image";
import { Box } from "@chakra-ui/react";
import ContactList from "./ContactList";
import Form from "./Form";

const ContactSection = () => {
  return (
    <>
      <Container fullWidth id="contact" data-scrollspy>
        <DividerImage img={DIVIDER_IMG[8]} />
        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="Contact Us" />
          <ContactList />
          <Form />
        </Box>
      </Container>
    </>
  );
};

export default ContactSection;
