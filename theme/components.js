const Button = {
  baseStyle: {
    fontWeight: 500,
    borderRadius: 0,
  },
  sizes: {
    md: {
      px: "30px",
      fontSize: "md",
    },
  },
  variants: {
    outline: {
      _hover: {
        bg: "sgi.green.500",
        borderColor: "sgi.green.500",
        color: "white",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

const Link = {
  baseStyle: {
    position: "relative",
    backfaceVisibility: "hidden",
    _hover: {
      position: "relative",
      transition: "0.5s color ease",
      textDecoration: "none",
      _after: {
        width: "100%!important",
      },
    },
  },
  variants: {
    image: {
      _hover: {
        _after: {
          width: 0,
        },
      },
    },
  },
};

const Heading = {
  baseStyle: {
    color: "sgi.primary.800",
    textAlign: "left",
  },
  sizes: {
    md: {
      fontSize: { base: "20px", md: "30px" },
    },
  },
  variants: {
    "without-line": {
      fontWeight: "600",
      px: { base: "40px", md: "150px" },
      pt: { base: "10px", md: 0 },
    },
  },
  defaultProps: {
    size: "md",
  },
};

export const components = { Button, Link, Heading };
