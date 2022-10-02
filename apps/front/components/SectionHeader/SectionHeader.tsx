import Typography from "@mui/material/Typography";

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h6"
      component="h3"
      align="center"
      sx={{
        textTransform: "uppercase",
        lineHeight: 1,
        letterSpacing: ".075rem",
      }}
    >
      {text}
      <hr
        style={{
          border: ".05em solid #083d77",
          borderRadius: "1em",
          width: "3em",
        }}
      />
    </Typography>
  );
};

export default SectionHeader;
