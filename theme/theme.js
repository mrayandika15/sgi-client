import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./components";

const theme = extendTheme(
  {
    colors,
    components,
    fonts: {
      body: `'Inter', sans-serif`,
    },
  },
  withDefaultColorScheme({
    colorScheme: "sgi.primary.800",
    components: ["Button", "Badge", "Input", "Select", "Checkbox"],
  })
);

export default theme;
