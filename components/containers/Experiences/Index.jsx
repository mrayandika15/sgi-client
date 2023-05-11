import { Container, DividerImage, Line, HeadingWithLine } from "../../core";
import { DIVIDER_IMG } from "../../../mock/image";
import { Box, Heading } from "@chakra-ui/react";
import RelevantExperiences from "./Relevant";
import Partnerships from "./Partnerships";

const ExperienceSection = () => {
  return (
    <>
      <Container fullWidth id="experience" data-scrollspy>
        <DividerImage img={DIVIDER_IMG[7]} />

        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="SGI's Relevant Experiences" />

          <RelevantExperiences />

          <Heading variant="without-line">Partnership</Heading>

          <Partnerships />
        </Box>
      </Container>
    </>
  );
};

export default ExperienceSection;
