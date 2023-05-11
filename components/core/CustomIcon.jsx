import { Icon } from "@chakra-ui/react";

const MenuIcon = (props, stroke) => (
  <Icon width="18" height="12" viewBox="0 0 18 12" fill="none" {...props}>
    <line y1="1" x2="18" y2="1" stroke={stroke} strokeWidth="2" />
    <line x1="3" y1="6" x2="18" y2="6" stroke={stroke} strokeWidth="2" />
    <line x1="6" y1="11" x2="18" y2="11" stroke={stroke} strokeWidth="2" />
  </Icon>
);

export default MenuIcon;
