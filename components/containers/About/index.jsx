import { Container, Line, HeadingWithLine } from "../../core";
import { Box, Heading } from "@chakra-ui/react";
import SubWhatWeDo from "./SubWhatWeDo";
import OurValue from "./OurValue";
import SubAbout from "./SubAbout";
import VisiMisi from "./VisiMisi";

const AboutSection = () => {
  return (
    <Box id="about-us" data-scrollspy>
      <Box py={{ base: "100", lg: "300" }}>
        <Box
          px={{ base: "5", lg: "20" }}
          bg="rgb(217,217,217,20%)"
          mx={{ base: "full", md: "20" }}
          pt="30px"
          pb="10px"
        >
          <HeadingWithLine text="About Us" variant="none" />
          <SubAbout />
          <VisiMisi />
        </Box>
      </Box>
      <Box bg="white">
        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="What We Do?" />
          <SubWhatWeDo />
          <Heading
            variant="without-line"
            mt={{ base: "18px", lg: "40px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            Our Values
          </Heading>
          <OurValue />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
