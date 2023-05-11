import { Box, ListItem, Text, UnorderedList, WrapItem } from "@chakra-ui/react";

const CardRoles = (props) => {
  return (
    <WrapItem flex="1">
      <Box backgroundColor="#E6E6E6">
        <Text
          backgroundColor="black"
          color="white"
          p="12px"
          fontWeight="bold"
          textAlign="center"
        >
          {props.role}
        </Text>
        <UnorderedList p="12px">
          {props.values.map((data, index) => (
            <ListItem key={index}>
              <Text p="12px" textAlign="start">
                {data}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </WrapItem>
  );
};

export default CardRoles;
