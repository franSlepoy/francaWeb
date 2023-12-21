import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterExitoso = ({ userData }) => {
  return (
    <Box width={"90%"} margin={"auto"} >
      {userData ? (
        <>
          <Typography
            sx={{
              mt: 10,
              color: "#0FA24A",
              fontFamily: "Lora",
              fontSize: "35px",
              fontWeight: "400",
              lineHeight: "45px",
            }}
          >
            Registro exitoso. ¡Bienvenido!
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#172826",
              fontFamily: "Lora",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "45px",
            }}
          >
           ¡Ingresá a tu sesión y seguí comprando!
          </Typography>
          
          <Link style={{textDecoration:"none"}} to={"/login"}>
          <Button
            sx={{
              ml: 3,
              mt: 4,
              width: "60%",
              p: "10px",
              borderRadius: "50px",
              bgcolor: "#006F6F",
              color: "#FFF6EE",
              fontFamily: "Lato",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "1.5px",
              "&:hover": {
                color: "#006F6F",
                bgcolor: "#FFF6EE", // Cambia el color al hacer hover
              },
            }}
            variant="contained"
          >
            continuar comprando
          </Button>
          </Link>
          
        </>
      ) : (
        <>
          <Typography
            sx={{
              mt: 10,
              color: "#0FA24A",
              fontFamily: "Lora",
              fontSize: "35px",
              fontWeight: "400",
              lineHeight: "45px",
            }}
          >
            Registro exitoso. ¡Bienvenido!
          </Typography>
          <Typography
            sx={{
              mt: 10,
              color: "#172826",
              fontFamily: "Lora",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "45px",
            }}
          >
           ¡Ingresá a tu sesión y seguí comprando!
          </Typography>
          
          <Link style={{textDecoration:"none"}} to={"/login"}>
          <Button
            sx={{
              
              mt: 4,
              width: "45%",
              p: "10px",
              borderRadius: "50px",
              bgcolor: "#006F6F",
              color: "#FFF6EE",
              fontFamily: "Lato",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "1.5px",
              "&:hover": {
                color: "#006F6F",
                bgcolor: "#FFF6EE", // Cambia el color al hacer hover
              },
            }}
            variant="contained"
          >
            continuar comprando
          </Button>
          </Link>
        </>
      )}
      
    </Box>
  );
};

export default RegisterExitoso;
