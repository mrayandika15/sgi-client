import { Box } from "@chakra-ui/react";

const Line = () => {
  return (
    <>
      <Box
        position="relative"
        w={{ base: "40px", md: "90px" }}
        _before={{
          content: `''`,
          bgImage: "url('/assets/greenLine.png')",
          bgRepeat: "no-repeat",
          bgPosition: "left",
          position: "absolute",
          top: 0,
          bottom: "-205px",
          right: 0,
          left: 0,
        }}
      />
      <Box
        position="relative"
        w={{ base: "60px", md: "130px" }}
        _before={{
          content: `''`,
          bgImage: "url('/assets/blackLine.png')",
          bgRepeat: "no-repeat",
          bgPosition: "left",
          position: "absolute",
          top: 0,
          bottom: "-220px",
          right: 0,
          left: 0,
        }}
      />
    </>
  );
};

export default Line;
