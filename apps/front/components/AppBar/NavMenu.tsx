import { useMenu } from "@hooks/useMenu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

interface NavMenuProps {
  pages: string[];
}

const NavMenu: React.FC<NavMenuProps> = (props) => {
  const { pages } = props;
  const { anchorElement, handleOpenMenu, handleCloseMenu } = useMenu();

  return (
    <>
      <IconButton
        size="large"
        aria-label="navigation menu of the page"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElement)}
        onClose={handleCloseMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavMenu;
