import React from "react";
import { Text } from "@chakra-ui/react";

const TextNote = (props) => {
  return (
    <Text
      px={{ base: "40px", md: "150px" }}
      ml={{ base: "20px", lg: "0px" }}
      mt="12px"
      fontSize={{ base: "12px", lg: "16px" }}
      // textAlign="justify"
    >
      {props.text}
    </Text>
  );
};

export default TextNote;
