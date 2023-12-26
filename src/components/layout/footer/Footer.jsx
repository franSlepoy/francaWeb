import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: "338px",
          bgcolor: "#14332F",
          mt: "200px",
        }}
      >
        <Box width={"80%"} margin={"auto"} display={"flex"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"50%"}
            sx={{
              color: "#FFF",
              fontFamily: "Lato",
              
            }}
            mt={"55px"}
          >
            <Box>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                }}
              >
                SERVICIOS
              </Typography>

              <Link
                style={{
                  textTransform: "none",
                  color: "inherit",
                  textDecoration: "none",
                }}
                to={"/asesoramiento"}
              >
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "1.5px",
                    fontFamily: "Lato",
                    "&:hover": {
                      color: "#0FA24A", // Cambia el color al hacer hover
                    },
                  }}
                >
                  Asesoramiento
                </Typography>
              </Link>

              <Link
                style={{
                  textTransform: "none",
                  color: "inherit",
                  textDecoration: "none",
                }}
                to={"/quienesSomos"}
              >
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "1.5px",
                    fontFamily: "Lato",
                    "&:hover": {
                      color: "#0FA24A", // Cambia el color al hacer hover
                    },
                  }}
                >
                  Quienes somos
                </Typography>
              </Link>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                }}
              >
                TIENDA
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                  "&:hover": {
                    color: "#0FA24A", // Cambia el color al hacer hover
                  },
                }}
              >
                Cómo comprar
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                  "&:hover": {
                    color: "#0FA24A", // Cambia el color al hacer hover
                  },
                }}
              >
                Envíos
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                  
                }}
              >
                CONTACTO
              </Typography>
              <a
                href="mailto:holafrancauy@gmail.com"
                style={{
                  textTransform: "none",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "1.5px",
                    fontFamily: "Lato",
                    "&:hover": {
                      color: "#0FA24A", // Cambia el color al hacer hover
                    },
                  }}
                >
                  holafrancauy@gmail.com
                </Typography>
              </a>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                }}
              >
                Montevideo, Uruguay.
              </Typography>
            </Box>
          </Box>

          <Box
            mt={"45px"}
            width={"50%"}
            display={"flex"}
            justifyContent={"flex-end"}
          >
            <Box>
              <img src="public/imagenes/Frame.svg" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
