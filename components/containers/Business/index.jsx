import { Container, DividerImage, Line, HeadingWithLine } from "../../core";
import { DIVIDER_IMG } from "../../../mock/image";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import SubBusiness from "./SubBusiness";
import ListBusiness from "./ListBusiness";
import SubCorporate from "../Corporate/SubCorporate";
import ListCorporate from "../Corporate/ListCorporate";
import { Organization_IMG, IPO_IMG } from "../../../mock/image";
import { IPO_SCHEDULES } from "../../../mock/data";
import ListBrief from "../Brief/ListBrief";
import ListInterests from "../Brief/ListInterests";
import ListAdvantage from "../Brief/ListAdvantage";
import SubIpo from "../Ipo/SubIpo";
import CapitalMarketProfession from "../IpoStages/CapitalMarketProfession";
import TextNote from "../IpoSchedules/TextNote";
import CustomImage from "../../core/CustomImage";

const Business = () => {
  return (
    <>
      <Container fullWidth id="business" data-scrollspy>
        <DividerImage img={DIVIDER_IMG[0]} />

        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="Our Lines of Business" />
          <SubBusiness />
          <ListBusiness />
        </Box>

        {/* NOTE: Calling all new design view here to persist nav scrollspy active indicator throughout the view*/}
        {/* Corporate */}
        <DividerImage img={DIVIDER_IMG[1]} />

        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="Corporate Action Advisory" />
          <SubCorporate />
          <ListCorporate />
        </Box>

        {/* Organization */}
        <DividerImage img={DIVIDER_IMG[2]} />

        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="Organization Chart PT. Satu Global Investama" />
          <Flex
            pt={{ base: "10px", md: "28px" }}
            px={{ base: "30px", md: "AUTO" }}
            justifyContent="center"
            alignItems="center"
          >
            <CustomImage
              src={Organization_IMG}
              alt="Organization"
              cursor="pointer"
            />
          </Flex>
        </Box>

        {/* Fundraising Overview */}
        <DividerImage img={DIVIDER_IMG[3]} />

        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="Brief on Fundraising in Capital Market - an Overview" />
          <ListBrief />
          <ListInterests />
          <Heading
            variant="without-line"
            mt={{ base: "18px", lg: "40px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            The Advantage of Go Public
          </Heading>
          <ListAdvantage />
        </Box>

        {/* IPO Section */}
        <DividerImage img={DIVIDER_IMG[4]} />

        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="Initial Public Offering (IPO)" />
          <SubIpo />
          <Heading
            variant="without-line"
            mt={{ base: "18px", lg: "40px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            Stock Listing Requirements in Indonesia Stock Exchange
          </Heading>
          <Box
            px={{ base: "40px", md: "150px" }}
            py={{ lg: "40px" }}
            mt={{ base: "18px", lg: "0px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            <CustomImage
              w="full"
              src={IPO_IMG.stockListing}
              objectFit="contain"
              alt="Stock listing requirements"
              cursor="pointer"
            />
          </Box>
        </Box>

        {/* IPO Stages */}
        <DividerImage img={DIVIDER_IMG[5]} />

        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="Initial Public Offering (IPO)" />
          <Box
            px={{ base: "40px", md: "150px" }}
            py={{ lg: "40px" }}
            mt={{ base: "18px", lg: "0px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            <CustomImage
              w="full"
              src={IPO_IMG.stages}
              objectFit="contain"
              alt="IPO Stages"
              cursor="pointer"
            />
          </Box>
          <Heading
            variant="without-line"
            mt={{ base: "18px", lg: "40px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            Registered License of the Capital Market Profession
          </Heading>
          <Box
            px={{ base: "40px", md: "150px" }}
            py={{ lg: "40px" }}
            mt={{ base: "18px", lg: "0px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            <CustomImage
              w="full"
              src={IPO_IMG.regLicense}
              objectFit="contain"
              alt="Capital Market Profession"
              cursor="pointer"
            />
          </Box>
          <CapitalMarketProfession />
        </Box>

        {/* IPO Schedules */}
        <DividerImage img={DIVIDER_IMG[6]} />

        <Line />
        <Box py="20" px="5" mx="auto" maxW={{ xl: "1800px" }}>
          <HeadingWithLine text="General Overview of IPO Process Schedules" />
          <Box
            px={{ base: "40px", md: "150px" }}
            py={{ lg: "40px" }}
            mt={{ base: "18px", lg: "0px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            <CustomImage
              w="full"
              src={IPO_IMG.preEffective}
              objectFit="contain"
              alt="Pre Effective"
              cursor="pointer"
            />
          </Box>
          <TextNote text={IPO_SCHEDULES.disclaimer} />
          <Heading
            variant="without-line"
            mt={{ base: "18px", lg: "40px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            Post Effective
          </Heading>
          <Box
            px={{ base: "40px", md: "150px" }}
            py={{ lg: "40px" }}
            mt={{ base: "18px", lg: "0px" }}
            ml={{ base: "20px", lg: "0px" }}
          >
            <CustomImage
              w="full"
              src={IPO_IMG.postEffective}
              objectFit="contain"
              alt="Post Effective"
              cursor="pointer"
            />
          </Box>
          <TextNote
            text={
              <>
                <Text as="span" fontWeight="bold">
                  Note:
                </Text>{" "}
                {IPO_SCHEDULES.note}
              </>
            }
          />
          <TextNote text={IPO_SCHEDULES.disclaimer} />
        </Box>
        {/* END OF VIEW */}
      </Container>
    </>
  );
};

export default Business;
