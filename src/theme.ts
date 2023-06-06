import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig =  {
  initialColorMode: 'dark'
};

const theme1 = extendTheme({ config });

export default theme1;