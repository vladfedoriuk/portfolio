import CircleIcon from "@mui/icons-material/Circle";
import { amber, deepOrange, green, grey } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

type BrowserWrapperProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof Box>;

const BrowserWrapper: React.FC<BrowserWrapperProps> = ({
  children,
  ...rest
}) => {
  return (
    <Paper elevation={1}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            bgcolor: grey[200],
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            p: 1,
          }}
        >
          <Stack direction="row" spacing={0.5} sx={{ alighSelf: "flex-start" }}>
            {[deepOrange[500], amber[400], green[500]].map((color) => (
              <CircleIcon key={color} sx={{ color }} fontSize="small" />
            ))}
          </Stack>
        </Box>
        <Box {...rest}>{children}</Box>
      </Box>
    </Paper>
  );
};

export default BrowserWrapper;
