import { Typography } from "@mui/material";

const Title = (title, fontFamily, color) => {
  return (
    <Typography
      sx={{
        fontFamily: { fontFamily },
        color: { color },
        fontSize: "35px",
        fontWeight: "400",
        lineHeight: "45px",
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
