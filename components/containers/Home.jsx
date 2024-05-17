import { VStack, Button, Text, chakra, Link, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Container, HeadingWithLine } from "../core";
import { HEADER_IMG_NEW } from "../../mock/image";
import { HOME } from "../../mock/data";
import { Navbar } from "../containers";
import { Box } from "@chakra-ui/react";
import SubAbout from "./About/SubAbout";
import VisiMisi from "./About/VisiMisi";

const HomeSection = () => {
  const [visible, setVisible] = useState(true);

  const debounce = (func, wait, immediate) => {
    let timeout;

    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(currentScrollPos < 10);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, handleScroll]);

  return (
    <>
      <Container fullWidth h="auto" pb="15px" id="home" data-scrollspy>
        <Navbar visible={visible} />

        {HOME?.map(({ title, subtitle, button_text: btn }, index) => (
          <VStack
            // textAlign="justify"
            key={index}
            px={{ base: "5", lg: "20" }}
            maxW="container.md"
            alignItems="flex-start"
            spacing="6"
            h="50vh"
            justifyContent="center"
            mt={visible ? "0" : { base: "112px", lg: "142px" }}
          >
            <Text color="white">
              <chakra.b fontSize={{ base: "26px", lg: "30px" }}>
                {title}
              </chakra.b>
              &nbsp;
              {subtitle}
            </Text>
            <Link href="#about-us">
              <Button color="white" borderColor="white">
                {btn}
              </Button>
            </Link>
          </VStack>
        ))}
      </Container>

      {/* <Box py={{ base: "100", lg: "300" }} id="about-us" data-scrollspy>
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
      </Box> */}
    </>
  );
};

export default HomeSection;
