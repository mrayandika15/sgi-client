import {
  Box,
  Image,
  HStack,
  VStack,
  IconButton,
  Flex,
  useBreakpointValue,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  LOGO_PUTIH,
  LOGO_HITAM,
  // ICONS_HITAM,
  // ICONS_PUTIH,
} from "../../mock/image";
import { MENU_ITEMS } from "../../mock/data";
import { ScrollSpy } from "../core/scrollSpy";
import { MenuIcon } from "../core";
import styles from "../../styles/Navbar.module.css";

const Navbar = ({ visible }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { isOpen, onOpen, onClose, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();

  const navClick = (e) => {
    e.preventDefault();
    window.location.hash = e.target.hash;

    const targetSection = document.querySelector(`${e.target.hash}`);
    window.scrollTo(0, targetSection.offsetTop + 1);
  };

  const onScrollUpdate = (entry, isInVewPort) => {
    const { target, boundingClientRect } = entry;
    const menuItem = document.querySelector(
      `[data-scrollspy-id="${target.id}"]`
    );
    if (boundingClientRect.y <= 0 && isInVewPort) {
      menuItem?.classList.add(`${styles.active}`);
    } else {
      if (menuItem?.classList.contains(`${styles.active}`)) {
        menuItem?.classList.remove(`${styles.active}`);
      }
    }
  };

  const navProps = {
    bgColor: "transparent",
    position: "sticky",
  };

  const fixedNavProps = {
    bgColor: "white",
    position: "fixed",
    top: 0,
    zIndex: 999,
  };

  return (
    <>
      <ScrollSpy handleScroll={onScrollUpdate} />
      <Box
        as="nav"
        boxShadow={"sm"}
        w="full"
        transition="all 0.3s ease"
        sx={visible ? { ...navProps } : { ...fixedNavProps }}
      >
        <Box py={{ base: "4", lg: "5" }}>
          <HStack
            spacing="10"
            justify="space-between"
            px={{ base: "5", lg: "20" }}
            py="5"
          >
            <Image
              src={visible ? LOGO_PUTIH : LOGO_HITAM}
              alt="SGI"
              h={{ base: "36px", lg: "64px" }}
            />

            {isDesktop ? (
              <Flex justify="space-between">
                <HStack spacing="10" fontSize="xl">
                  {MENU_ITEMS?.map(({ label }, index) => {
                    const hash = label.toLowerCase().replace(" ", "-");
                    return (
                      <Link
                        key={index}
                        href={`#${hash}`}
                        onClick={navClick}
                        data-scrollspy-id={hash}
                        fontSize="sm"
                        color={visible ? "white!important" : "sgi.gray"}
                        _after={{
                          content: `""`,
                          transition: "0.5s all ease",
                          position: "absolute",
                          bottom: "-0.25em",
                          left: "0",
                          height: "2.2px",
                          width: "0",
                          background: visible ? "white" : "sgi.green.500",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </HStack>

                {/* <HStack>
                  {visible
                    ? ICONS_PUTIH.map((icon, index) => (
                        <Link variant="image" key={index} w="40px">
                          <Image src={icon} />
                        </Link>
                      ))
                    : ICONS_HITAM.map((icon, index) => (
                        <Link variant="image" key={index} w="40px">
                          <Image src={icon} />
                        </Link>
                      ))}
                </HStack> */}
              </Flex>
            ) : (
              <>
                <IconButton
                  {...buttonProps}
                  variant="ghost"
                  icon={
                    <MenuIcon
                      width="25px"
                      stroke={visible ? "white" : "sgi.primary.800"}
                    />
                  }
                  aria-label="Open Menu"
                  onClick={onOpen}
                />

                <Drawer onClose={onClose} isOpen={isOpen} size="full">
                  <DrawerOverlay />

                  <DrawerContent bg="sgi.primary.800" color="white" py="5">
                    <DrawerCloseButton fontSize="lg" px="10" py="45px" />

                    <DrawerHeader>
                      <Image src={LOGO_PUTIH} alt="SGI" h="64px" />
                    </DrawerHeader>

                    <DrawerBody py="10">
                      <VStack
                        spacing="10"
                        fontSize="xl"
                        alignItems="flex-start"
                      >
                        {MENU_ITEMS?.map(({ label }, index) => {
                          const hash = label.toLowerCase().replace(" ", "-");
                          return (
                            <Link
                              key={index}
                              href={`#${hash}`}
                              onClick={onClose}
                              data-scrollspy-id={hash}
                              fontSize="sm"
                              color="white!important"
                              _after={{
                                content: `""`,
                                transition: "0.5s all ease",
                                position: "absolute",
                                bottom: "-0.25em",
                                left: "0",
                                height: "2.2px",
                                width: "0",
                                background: "white",
                                backfaceVisibility: "hidden",
                              }}
                            >
                              {label}
                            </Link>
                          );
                        })}
                      </VStack>

                      {/* <HStack alignItems="flex-start" py="10" spacing="-1">
                        {ICONS_PUTIH?.map((icon, index) => (
                          <Link variant="image" key={index} w="40px">
                            <Image src={icon} />
                          </Link>
                        ))}
                      </HStack> */}
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
