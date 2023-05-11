import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { Footer, Navbar } from "../components/containers";
import React from "react";

const Layout = ({ children, documentTitle }) => {
  return (
    <>
      <Box maxW="full">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>{documentTitle}</title>
        </Head>

        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
