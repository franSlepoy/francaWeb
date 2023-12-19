import { Box, Typography } from "@mui/material";

const Asesoramiento = () => {
  return (
    <>
      <Box width={"80%"} margin={"auto"} display={"flex"}>
        <Box ml={"10%"} width={"50%"}mt={"80px"}>
          <Box>
            <img src="public/imagenes/ase1.png" alt="" />
          </Box>
          <Box sx={{ml:"15%", mt:-15}}>
            <img src="public/imagenes/ase2.png" alt="" />
          </Box>
        </Box>

        <Box width={"50%"} ml={12} mt={"200px"}>
          <Box>
            <Typography sx={{width:"80%", color:"#006F6F", fontFamily:"Lora", fontSize:"45px",fontWeight:"400", lineHeight:"57px" }}>
              Nuestra filosofía: encontrar el confort de tu estilo.
            </Typography>
            <Typography sx={{width:"90%", color:"#172826", fontFamily:"Lora", fontSize:"35px",fontWeight:"400", lineHeight:"48px" }}>
              Franca ofrece productos para el hogar. Sillones, puff, butacas,
              espejos, alfombras, mobiliario, banquetas, respaldos de cama,
              accesorios textiles y de cocina.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Asesoramiento;
