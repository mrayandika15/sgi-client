import { Box } from "@chakra-ui/react";

const DividerImage = ({ img }) => {
  return (
    <Box
      backgroundImage={img}
      backgroundSize="cover"
      backgroundPosition="center center"
      h="268px"
    />
  );
};

export default DividerImage;
