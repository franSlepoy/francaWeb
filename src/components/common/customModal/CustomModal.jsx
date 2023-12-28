import { Box, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CustomModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",

          left: "55%",
          width: "45%",
          height: "100%",
          bgcolor: "#FFF6EE",
        }}
      >
        <Box
          sx={{
            height: "179px",
            p: "45px",
            bgcolor: "rgba(0, 111, 111, 0.29)",
            border: "0px solid #000;",
          }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              sx={{
                color: "#172826",
                fontFamily: "Rasa",
                fontSize: "35px",
                fontWeight: "300",
                lineHeight: "45px",
              }}
            >
              Espejo Ventana 70x90{" "}
            </Typography>
            <Typography
              sx={{
                color: "#172826",
                fontFamily: "Rasa",
                fontSize: "35px",
                fontWeight: "300",
                lineHeight: "45px",
              }}
            >
              $16.280
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Box
              mt={1.3}
              width={"25px"}
              height={"25px"}
              sx={{ bgcolor: "green", borderRadius: "100%" }}
            >
              <Box ml={"5px"} mt={"4px"}>
                <img src="/public/imagenes/check.svg" alt="" />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  ml: 1,
                  color: "#172826",
                  fontFamily: "Lato",
                  fontWeight: "600",
                  lineHeight: "45px",
                }}
              >
                Añadido al carrito
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              mt: 1,
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "13px",
              letterSpacing: "-0.36px",
              color: "#172826",
              textDecoration: "underline",
              "&:hover": {
                color: "#006F6F",
              },
            }}
          >
            <Link style={{ color: "#172826" }} to={"/checkOut"}>
              <Typography
                onClick={handleClose}
                sx={{
                  textDecoration: "underline",
                  "&:hover": {
                    color: "#006F6F",
                    cursor: "pointer",
                    fontFamily: "Lato",
                  },
                }}
              >
                Finalizar compra
              </Typography>
            </Link>

            <Link style={{ color: "#172826" }} to={"/"}>
              <Typography
                onClick={handleClose}
                sx={{
                  textDecoration: "underline",
                  "&:hover": {
                    color: "#006F6F",
                    fontFamily: "Lato",
                  },
                }}
              >
                Seguir comprando
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box p={"45px"}>
          <Typography
            sx={{
              color: "#172826",
              fontFamily: "Rasa",
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "45px",
            }}
          >
            Otros productos añadidos al carrito
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              sx={{
                color: "#172826",
                fontFamily: "Rasa",
                fontSize: "35px",
                fontWeight: "300",
                lineHeight: "45px",
              }}
            >
              Espejo Ventana 70x90
            </Typography>
            <Typography
              sx={{
                color: "#172826",
                fontFamily: "Rasa",
                fontSize: "35px",
                fontWeight: "300",
                lineHeight: "45px",
              }}
            >
              $16.280
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              mt:"70%",
             
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "13px",
              letterSpacing: "-0.36px",
              color: "#172826",
              textDecoration: "underline",
              "&:hover": {
                color: "#006F6F",
              },
            }}
          >
            <Link style={{ color: "#172826" }} to={"/checkOut"}>
              <Typography
                onClick={handleClose}
                sx={{
                  textDecoration: "underline",
                  "&:hover": {
                    color: "#006F6F",
                    cursor: "pointer",
                    fontFamily: "Lato",
                  },
                }}
              >
                Finalizar compra
              </Typography>
            </Link>

            <Link style={{ color: "#172826" }} to={"/"}>
              <Typography
                onClick={handleClose}
                sx={{
                  textDecoration: "underline",
                  "&:hover": {
                    color: "#006F6F",
                    fontFamily: "Lato",
                  },
                }}
              >
                Seguir comprando
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
