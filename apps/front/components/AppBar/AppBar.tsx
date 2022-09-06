import Link from "@components/Link/navigation";
import Logo from "@components/Logo";
import { default as MUIAppBar } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import NavMenu from "./NavMenu";

const pages = ["blog"];

const AppBar = () => {
  return (
    <MUIAppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Logo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link key={page} variant="navigation" href="/blog">
                {page}
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <NavMenu pages={pages} />
          </Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};
export default AppBar;
