// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import {
  Box,
  Input,
  VStack,
  HStack,
  Text,
  Button,
  Grid,
  GridItem,
  Flex,
  Stack,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CONTACT_US } from "../../../mock/data";

const Form = () => {
  const [value, setValue] = useState({
    message: "",
    subject: "",
    name: "",
  });

  const onChangesForm = (event, initial) => {
    return setValue((prevState) => ({
      ...prevState,
      [initial]: event.target.value,
    }));
  };

  function SendMail() {
    window.location.href =
      "mailto:info@satuglobalinvestama.com?subject=" +
      value.subject +
      "&body=" +
      "greeting from" +
      " " +
      value.name +
      value.message;
  }
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const { isOpenSucces, onOpenSucces, onCloseSucces } = useDisclosure();
  const [isOpenSubmit, setIsOpenSubmit] = useState(false);
  const [isOpenSucces, setIsOpenSucces] = useState(false);

  const onCloseModalSubmit = () => {
    setIsOpenSubmit(false);
    setIsOpenSucces(true);

    SendMail();

    setValue({
      name: "",
      message: "",
      subject: "",
    });
  };

  const onCloseModalSucces = () => {
    setIsOpenSucces(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));

  // handle disabled submit
  const isValid = value.subject && value.message;

  return (
    <Box px={{ base: "40px", md: "150px" }}>
      <HStack
        ml={{ base: "20px", lg: "0px" }}
        spacing={{ base: "0", lg: "10" }}
        justifyContent="space-between"
        alignItems="stretch"
        flexDirection={{ base: "column", lg: "row" }}
      >
        {CONTACT_US?.map((data, index) => (
          <Grid
            textAlign="justify"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            justifyContent="space-between"
            borderColor="sgi.primary.100"
            my={{ base: "0px", lg: 0 }}
            key={index}
          >
            {/* Question Seaction */}

            <GridItem
              pr={{ base: "0px", lg: "100px" }}
              mb={{ base: "20px", lg: "60px" }}
              w="100%"
              h="100%"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Text
                mb="14px"
                borderColor="sgi.primary.100"
                fontWeight="bold"
                fontSize={{ base: "14px", lg: "20px" }}
              >
                Question or Comments
              </Text>

              <Text
                fontSize={{ base: "12px", lg: "16px" }}
                mb={{ base: "0px", lg: "0px" }}
              >
                For further questions and comments about our company, please
                leave your name, email address and message below. We will
                respond to your feedback as soon as possible.
              </Text>
            </GridItem>

            {/* Form Section */}

            <GridItem
              pl={{ base: "0px", lg: "70px" }}
              pr={{ base: "0px", lg: "0px" }}
              mb="23px"
              w="100%"
              h="100%"
              flexDirection={{ base: "column", lg: "column" }}
            >
              <Stack spacing={3} onSubmit={handleSubmit(onSubmit)}>
                <Input
                  placeholder="Name"
                  onChange={(event) => onChangesForm(event, "name")}
                  value={value.name}
                  id="Name"
                  size="md"
                  height="46px"
                  borderRadius="0px"
                  focusBorderColor="none"
                  borderColor="sgi.primary.800"
                  _hover="none"
                />
                <Input
                  placeholder="Subject"
                  id="ValueSubject"
                  onChange={(event) => onChangesForm(event, "subject")}
                  value={value.subject}
                  size="md"
                  height="46px"
                  borderRadius="0px"
                  focusBorderColor="none"
                  borderColor="sgi.primary.800"
                  _hover="none"
                />
                <Textarea
                  placeholder="Messages"
                  onChange={(event) => onChangesForm(event, "message")}
                  value={value.message}
                  id="ValueMessages"
                  height="161px"
                  borderRadius="0px"
                  focusBorderColor="none"
                  borderColor="sgi.primary.800"
                  _hover="none"
                />
                <Button
                  color="white"
                  borderColor="sgi.primary.800"
                  width="100%"
                  textColor="sgi.primary.800"
                  onClick={() => setIsOpenSubmit(true)}
                  disabled={!isValid}
                >
                  Submit
                </Button>
              </Stack>
            </GridItem>

            {/* Modal Submit */}
            <Modal isOpen={isOpenSubmit} onClose={() => setIsOpenSubmit(false)}>
              <ModalOverlay />
              <ModalContent mx={{ base: "22px", lg: "0px" }}>
                <ModalHeader></ModalHeader>
                <ModalCloseButton borderRadius="100%" />
                <ModalBody>
                  <Flex gap="15px">
                    <Center bg="blackAlpha.100" borderRadius="6px" width="15%">
                      <Image
                        src="/icon/ceklis.png"
                        alt="office"
                        w={{ base: "20px", lg: "30px" }}
                        h={{ base: "20px", lg: "30px" }}
                      />
                    </Center>
                    <Flex direction={"column"}>
                      <Text
                        fontSize={{ base: "16px", lg: "20px" }}
                        textColor="sgi.primary.800"
                        fontWeight="semibold"
                        mb={{ base: "5px", lg: "8px" }}
                      >
                        Sure you want to submit?
                      </Text>
                      <Text
                        fontSize={{ base: "14px", lg: "14px" }}
                        textColor="sgi.primary.500"
                        fontWeight="normal"
                      >
                        This action cannot be undone!
                      </Text>
                    </Flex>
                  </Flex>
                </ModalBody>

                <ModalFooter gap={3}>
                  <Button
                    color="white"
                    borderColor="sgi.primary.800"
                    width="100%"
                    textColor="sgi.primary.800"
                    onClick={() => setIsOpenSubmit(false)}
                    fontSize={{ base: "14px", lg: "14px" }}
                  >
                    No, cancel
                  </Button>
                  <Button
                    id="btn"
                    color="white"
                    borderColor="sgi.primary.800"
                    width="100%"
                    textColor="sgi.primary.800"
                    onClick={onCloseModalSubmit}
                    fontSize={{ base: "14px", lg: "14px" }}
                  >
                    Yes, confirm
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            {/* Modal Succes */}
            <Modal isOpen={isOpenSucces} onClose={() => setIsOpenSucces(false)}>
              <ModalOverlay />
              <ModalContent
                mx={{ base: "22px", lg: "0px" }}
                justifyItems="center"
              >
                <ModalHeader></ModalHeader>
                <ModalCloseButton borderRadius="100%" />
                <ModalBody>
                  <Flex
                    direction="column"
                    alignItems="center
                  "
                  >
                    <Image
                      src="/icon/ceklis.png"
                      alt="office"
                      w={{ base: "50px", lg: "60px" }}
                      h={{ base: "50px", lg: "60px" }}
                      mb="17px"
                    />
                    <Flex direction={"column"}>
                      <Text
                        fontSize={{ base: "16px", lg: "20px" }}
                        textColor="sgi.primary.800"
                        fontWeight="semibold"
                        mb={{ base: "5px", lg: "8px" }}
                        textAlign="center"
                      >
                        Successfully accepted!
                      </Text>
                      <Text
                        fontSize={{ base: "14px", lg: "14px" }}
                        textColor="sgi.primary.500"
                        fontWeight="normal"
                        textAlign="center"
                      >
                        Thank you for your question and comment, please kindly
                        wait for our respond.
                      </Text>
                    </Flex>
                  </Flex>
                </ModalBody>

                <ModalFooter alignItems="center" width="100%">
                  <Flex direction="column" gap={3} width="100%">
                    <Button
                      color="white"
                      borderColor="sgi.primary.800"
                      width="100%"
                      textColor="sgi.primary.800"
                      onClick={onCloseModalSucces}
                      fontSize={{ base: "14px", lg: "14px" }}
                    >
                      <a>Home</a>
                    </Button>
                    <Button
                      color="white"
                      borderColor="sgi.primary.800"
                      width="100%"
                      textColor="sgi.primary.800"
                      onClick={() => setIsOpenSucces(false)}
                      fontSize={{ base: "14px", lg: "14px" }}
                    >
                      Close
                    </Button>
                  </Flex>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <VStack fontSize="md" spacing="-1">
              {data.content?.map((content, index) => (
                <Text key={index}>{content}</Text>
              ))}
            </VStack>
          </Grid>
        ))}
      </HStack>
    </Box>
  );
};

export default Form;
