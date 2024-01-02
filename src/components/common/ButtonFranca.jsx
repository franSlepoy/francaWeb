import { Button, Typography } from "@mui/material";

const ButtonFranca = ({ title, onClick, type, width }) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={onClick}
        type={type}
        
        sx={{
          width:{width},
          padding: "17px 120px",
          borderRadius: "36px",
          bgcolor: " #006F6F",
          color: "#FFF",
          "&:hover": {
            bgcolor: "#014747", 
          },
          "&:active": {
            bgcolor: "#7FB7B7", // Cambia el color de fondo cuando se hace clic
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Lato",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "1.5px",
          }}
        >
          {title}
        </Typography>
      </Button>
    </>
  );
};

export default ButtonFranca;
