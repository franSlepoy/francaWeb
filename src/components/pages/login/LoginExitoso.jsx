import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginExitoso = ({ userData }) => {
    return (
      <Box width={"80%"} margin={"auto"} textAlign={"center"}>
        {userData ? (
          <Typography sx={{mt:10, color:"#0FA24A", fontFamily:"Lora", fontSize:"35px", fontWeight:"400", lineHeight:"45px"}} >Login exitoso. ¡Bienvenido, {userData.displayName}!</Typography>
          
        ) : (
          <Typography sx={{mt:10, color:"#0FA24A", fontFamily:"Lora", fontSize:"35px", fontWeight:"400", lineHeight:"45px"}} >Login exitoso. ¡Bienvenido!</Typography>
        )}
         <Link style={{ textDecoration: "none" }} to={"/dashboard"}>
        <Button
          variant="outlined"
          sx={{
            ml: 3,
            mt: 15,
            textAling: "center",
            width: "22%",
            p: "10px",
            borderRadius: "50px",
            borderColor: "#006F6F",
            color: "#006F6F",
            fontFamily: "Lato",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "1.5px",
            textTransform: "none",
          }}
        >
          Dashboard
        </Button>
      </Link>
      </Box>
    );
  };
  
  export default LoginExitoso;