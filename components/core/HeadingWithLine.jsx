import { Heading } from "@chakra-ui/react";

const HeadingWithLine = ({ text, variant = "basic" }) => {
  const lastText = text.trim().split(" ").pop();
  const notLastText = text.replace(/[\W]*\S+[\W]*$/, "");
  return (
    <Heading
      fontWeight="500"
      textColor={variant === "basic" ? "black" : "white"}
      px={variant === "basic" && { base: "60px", md: "150px" }}
      pr={variant === "basic" && { base: "20px" }}
      pt={variant === "basic" && { base: "10px", md: 0 }}
    >
      {notLastText} <b>{lastText}</b>
    </Heading>
  );
};

export default HeadingWithLine;
