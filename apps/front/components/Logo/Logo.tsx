import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Logo: React.FC = () => {
  return (
    <>
      <Avatar
        sx={{
          mr: 1,
          bgcolor: "primary.main",
        }}
        alt="Vladyslav  Fedoriuk"
        src="/broken-image.jpg"
      >
        VF
      </Avatar>
      <Typography
        variant="body1"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: "flex",
          alignItems: "center",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Vladyslav Fedoriuk
      </Typography>
    </>
  );
};

export default Logo;
