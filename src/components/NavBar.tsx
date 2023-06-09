import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchBar />
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
