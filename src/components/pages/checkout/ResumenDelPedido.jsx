import { Box, Typography } from "@mui/material";
import ButtonFranca from "../../common/ButtonFranca";
import { Link } from "react-router-dom";


const ResumenDelPedido = () => {
  return (
    <>
      <Box width={"100%"} mt={"80px"} ml={"10%"}>
        <Typography
          sx={{
            color: "#172826",
            fontFamily: "Lora",
            fontSize: "35px",
            fontWeight: "400",
            lineHeight: "45px",
          }}
        >
          Resumen del pedido
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} mt={"50px"}>
          <Typography
            sx={{
              color: "#172826",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "12px",
            }}
          >
            importe
          </Typography>
          <Typography
            sx={{
              color: "#172826",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "45px",
            }}
          >
            $15.677
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography
            sx={{
              color: "#172826",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "12px",
            }}
          >
            Gastos de envio
          </Typography>
          <Typography
            sx={{
              color: "#172826",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "45px",
            }}
          >
            $0
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography
            sx={{
              color: "#172826",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "12px",
            }}
          >
            Total
          </Typography>
          <Typography
            sx={{
              color: "#172826",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "45px",
            }}
          >
            $15.677
          </Typography>
        </Box>
        <Link to={"/formularioDeEnvio"}>
        <Box mt={"51px"}>
          <ButtonFranca title={"TRAMITAR PEDIDO"} />
        </Box>
        </Link>
        
      </Box>
    </>
  );
};

export default ResumenDelPedido;
