import { Box, Button, IconButton, Typography } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CheckOut = ({ selectedValue, handleChange }) => {
  const numberOptions = Array.from({ length: 4 }, (_, index) => index + 1); // Crear un array de números del 1 al 10
  return (
    <>
      <Box display={"flex"} width={"80%"} margin={"auto"}>
        <Box>
          <Box width={"580px"}>
            <Box mt={"80px"}>
              <Box display={"flex"}>
                <img src="public/imagenes/Vector.svg" alt="" />
                <Typography
                  sx={{
                    color: "#172826",
                    fontFamily: "Lora",
                    fontSize: "35px",
                    fontWeight: "400",
                    lineHeight: "45px",
                    ml: 2,
                  }}
                >
                  Carrito (2 artículos)
                </Typography>
              </Box>

              <Box display={"flex"} mt={"30px"}>
                <Box width={"32%"} bgcolor={"#C4C4C4"}></Box>

                <Box
                  pl={3}
                  pt={3}
                  pr={3}
                  width={"64%"}
                  bgcolor={"rgba(156, 128, 94, 0.18)"}
                  border={"0px solid #FFF"}
                >
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <Typography
                        sx={{
                          color: "#172826",
                          fontFamily: "Lora",
                          fontSize: "20px",
                          fontWeight: "400",
                          lineHeight: "12px",
                        }}
                      >
                        Espejo Ventana 70 x 90
                      </Typography>
                    </Box>
                    <Box>
                      <FormControl sx={{ mt: -3 }} variant="standard">
                        <InputLabel id="demo-customized-select-label"></InputLabel>
                        <Select
                          sx={{
                            color: "black",
                            fontFamily: "Lato",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "12px",
                            border: "solid 1px",
                            width: "60px",
                          }}
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={selectedValue}
                          onChange={handleChange}
                        >
                          {numberOptions.map((number) => (
                            <MenuItem key={number} value={number}>
                              {number}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box>
                    <Box mt={2}>
                      <Typography
                        sx={{
                          color: "#172826",
                          fontFamily: "Lato",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "12px",
                        }}
                      >
                        Color: Gris plata
                      </Typography>
                      <Typography
                        mt={0.2}
                        sx={{
                          mt: "10px",
                          color: "#0FA24A",
                          fontFamily: "Lato",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "12px",
                        }}
                      >
                        Envío a domicilio
                      </Typography>
                    </Box>
                    <Box
                      mt={"50px"}
                      mb={"20px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Box>
                        <IconButton sx={{ mt: 2 }}>
                          <img src="/public/imagenes/eliminar.png" alt="" />
                          <Typography
                            ml={1}
                            sx={{
                              color: "#172826",
                              fontFamily: "Lato",
                              fontSize: "14px",
                              fontWeight: "400",
                              lineHeight: "12px",
                            }}
                          >
                            Eliminar
                          </Typography>
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#172826",
                            fontFamily: "Lato",
                            fontSize: "25px",
                            fontWeight: "600",
                            lineHeight: "45px",
                          }}
                        >
                          $14.300
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box width={"580px"} mt={"80px"}>
              <Box display={"flex"} mt={"30px"}>
                <Box width={"32%"} bgcolor={"#C4C4C4"}></Box>

                <Box
                  pl={3}
                  pt={3}
                  pr={3}
                  width={"64%"}
                  bgcolor={"rgba(156, 128, 94, 0.18)"}
                  border={"0px solid #FFF"}
                >
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <Typography
                        sx={{
                          color: "#172826",
                          fontFamily: "Lora",
                          fontSize: "20px",
                          fontWeight: "400",
                          lineHeight: "12px",
                        }}
                      >
                        Espejo Ventana 70 x 90
                      </Typography>
                    </Box>
                    <Box>
                      <FormControl sx={{ mt: -3 }} variant="standard">
                        <InputLabel id="demo-customized-select-label"></InputLabel>
                        <Select
                          sx={{
                            color: "black",
                            fontFamily: "Lato",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "12px",
                            border: "solid 1px",
                            width: "60px",
                          }}
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={selectedValue}
                          onChange={handleChange}
                        >
                          {numberOptions.map((number) => (
                            <MenuItem key={number} value={number}>
                              {number}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box>
                    <Box mt={2}>
                      <Typography
                        sx={{
                          color: "#172826",
                          fontFamily: "Lato",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "12px",
                        }}
                      >
                        Color: Gris plata
                      </Typography>
                      <Typography
                        mt={0.2}
                        sx={{
                          mt: "10px",
                          color: "#0FA24A",
                          fontFamily: "Lato",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "12px",
                        }}
                      >
                        Envío a domicilio
                      </Typography>
                    </Box>
                    <Box
                      mt={"50px"}
                      mb={"20px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Box>
                        <IconButton sx={{ mt: 2 }}>
                          <img src="/public/imagenes/eliminar.png" alt="" />
                          <Typography
                            ml={1}
                            sx={{
                              color: "#172826",
                              fontFamily: "Lato",
                              fontSize: "14px",
                              fontWeight: "400",
                              lineHeight: "12px",
                            }}
                          >
                            Eliminar
                          </Typography>
                        </IconButton>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#172826",
                            fontFamily: "Lato",
                            fontSize: "25px",
                            fontWeight: "600",
                            lineHeight: "45px",
                          }}
                        >
                          $14.300
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mt={"78px"}>
                <Button
                  variant="contained"
                  sx={{
                    padding: "17px 120px",
                    borderRadius: "36px",
                    bgcolor: " #006F6F",
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Lato",
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    letterSpacing: "1.5px",
                  }}
                >
                  <Typography>SEGUIR COMPRANDO</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

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
          <Box mt={"78px"}>
            <Button
              variant="contained"
              sx={{
                padding: "17px 120px",
                borderRadius: "36px",
                bgcolor: " #006F6F",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Lato",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "1.5px",
              }}
            >
              <Typography>TRAMITAR PEDIDO</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CheckOut;
