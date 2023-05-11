import { Box } from "@chakra-ui/react";

const Container = ({ fullWidth, ...props }) => {
  return (
    <>
      {fullWidth ? (
        <Box as="section" maxW="full" p="0" overflow="hidden" {...props} />
      ) : (
        <Box
          as="section"
          maxW="container.xl"
          w="full"
          mx="auto"
          px="5"
          overflow="hidden"
          {...props}
        />
      )}
    </>
  );
};

export default Container;
