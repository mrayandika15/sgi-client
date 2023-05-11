// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import SGITheme from "../theme/theme";
import "@fontsource/inter";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={SGITheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
