import { Box, Typography } from "@mui/material";

const QuienesSomos = () => {
  return (
    <Box  width={"80%"} margin={"auto"} display={"flex"}>
      <Box  display={"flex"} width={"50%"}>
      <Box mt={"200px"} width={"45%"}>
        <img width={"100%"} src="/public/imagenes/qSomos.png" alt="" />
      </Box>

      <Box mt={"80px"}  ml={2} width={"50%"}>
        <Box>
          <img width={"100%"} src="/public/imagenes/qSomos2.png" alt="" />
        </Box>
        <Box mt={2} width={"100%"} height={"30%"} bgcolor={"#006F6F"}>
            <Typography sx={{p:4,color:"#FFF6EE", fontFamily:"Lora", fontSize:"35px", fontWeight:"400", lineHeight:"45px"}}>
            Tienda de objetos de decoración de interiores.
            </Typography>
        </Box>
        <Box mt={2}>
          <img width={"100%"} src="/public/imagenes/qSomos21.png" alt="" />
        </Box>
      </Box>
      </Box>
      

      <Box mt={"200px"} ml={1} width={"50%"} >
        <Box>
          <img width={"100%"}  src="/public/imagenes/qSomos3.png" alt="" />
        </Box>
        <Box mt={2}>
          <img width={"65%"} src="/public/imagenes/qSomos31.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default QuienesSomos;
