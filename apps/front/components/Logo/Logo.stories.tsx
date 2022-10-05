import Box from "@mui/system/Box";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Logo from "./Logo";

export default {
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const DesktopLogo: ComponentStory<typeof Logo> = () => (
  <Box sx={{ display: { xs: "none", md: "flex" } }}>
    <Logo />
  </Box>
);

export const MobileLogo: ComponentStory<typeof Logo> = () => (
  <Box
    sx={{
      display: { xs: "flex", md: "none" },
      justifyContent: "flex-end",
      flexGrow: 1,
    }}
  >
    <Logo />
  </Box>
);
