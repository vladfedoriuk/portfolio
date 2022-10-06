import Box from "@mui/system/Box";

const SectionContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  );
};

export default SectionContent;
