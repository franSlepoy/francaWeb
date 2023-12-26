import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box
        width={"100%"}
        sx={{
          backgroundImage: `url("/public/imagenes/home.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Typography
            sx={{
              pt: 24,
              maxWidth: "70%",
              color: "#FFF6EE",
              fontFamily: "Lora",
              fontSize: "80px",
              fontWeight: "400",
              lineHeight: "89px",
            }}
          >
            Todo el confort de los objetos diseñados con estilo
          </Typography>
        </Box>
        
        <Box sx={{ width: "80%", margin: "auto", mb:"20px", mt:"155px" }}>
        <Link style={{ textDecoration: "none" }}  to={"/quienesSomos"}>
        <Button
          sx={{
            width:"173px",
            fontFamily: "Lora",
            backgroundColor: "#FFF6EE",
            color: "#006F6F",
            textAlign: "center",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "1.5px",
            padding:"10px",
            gap:10,
            alignItems:"center",
            borderRadius:"50px",

          }}
        >
         CONOCENOS
        </Button>
        </Link>
       
        </Box>
       
      </Box>
      
    </>
  );
};

export default Home;
