import { Image } from "@chakra-ui/react";
import React from "react";
import "react-awesome-lightbox/build/style.css";
import Lightbox from "react-awesome-lightbox";

const CustomImage = ({ src, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const n = src.lastIndexOf(".");
  const lightBoxSrc = src.substring(0, n) + "-modal" + src.substring(n);

  return (
    <>
      <Image
        src={src}
        onClick={() => setIsOpen((prevState) => !prevState)}
        {...props}
      />

      {isOpen && src && (
        <Lightbox
          image={lightBoxSrc}
          title={props.alt}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default CustomImage;
