import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: "338px",
          bgcolor: "#14332F",
        }}
      >
        <Box width={"80%"} margin={"auto"} display={"flex"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"50%"}
            sx={{ color: "#FFF", fontFamily: "Lato" }}
            mt={"55px"}
          >
            <Box>
              <Typography
                sx={{
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
                to={"/"}
              >
                <Typography
                  sx={{
                    mt:1,
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "1.5px",
                    fontFamily: "Lato",
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
                to={"/"}
              >
                <Typography
                  sx={{
                    mt:1,
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "1.5px",
                    fontFamily: "Lato",
                  }}
                >
                  Quienes somos
                </Typography>
              </Link>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt:1,
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
                  mt:1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                }}
              >
                Cómo comprar
              </Typography>
              <Typography
                sx={{
                  mt:1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                }}
              >
                Envíos
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt:1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                }}
              >
                CONTACTO
              </Typography>
              <Link
                style={{
                  textTransform: "none",
                  color: "inherit",
                  textDecoration: "none",
                }}
                to={"/"}
              >
                <Typography
                  sx={{
                    mt:1,
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "1.5px",
                    fontFamily: "Lato",
                  }}
                >
                  holafrancauy@gmail.com
                </Typography>
              </Link>

              <Typography
                sx={{
                  mt:1,
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Lato",
                }}
              >
                Montevideo, Uruguay 
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
