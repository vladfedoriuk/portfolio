import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import Image from "next/image";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          color="primary"
        >
          Page not found
        </Typography>
        <Typography variant="h5" component="h2" color="secondary">
          There is either no such page or the work is still in progress.
        </Typography>
      </Container>

      <Image
        src="/not-found-error-alert.svg"
        alt="Not found"
        width={200}
        height={200}
      />
    </Box>
  );
}
