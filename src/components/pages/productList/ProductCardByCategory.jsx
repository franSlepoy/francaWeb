import { Box, Typography } from "@mui/material";

const ProductCardByCategory = ({ product }) => {
    // Calcular el precio con descuento del 10%
    const precioConDescuento = product.precio * 0.9;
  console.log("soy el", product);
  return (
    <Box mb={"100px"}>
      <Box>
        <img width={"100%"} src={product.imagen1} alt="imagne_de_producto" />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          sx={{
            color: "#172826",
            fontFamily: "Lora",
            fontSize:"25px",
            fontWeight: "400",
            lineHeight: "45px",
          }}
        >
          {product.nombre}
        </Typography>
        <Typography
          sx={{
            color: "#172826",
            textAlign: "right",
            fontFamily: "Lato",
            fontSize:"12px",
            fontWeight: "700",
            lineHeight: "45px",
          }}
        >
          ${product.precio}
        </Typography>
      </Box>
      
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          sx={{
            color: "#A1968B",
            fontSize:"12px",
            fontFamily: "Lato",
            fontWeight: "400",
            lineHeight: "12px",
          }}
        >
          10% OFF Transferencia
        </Typography>
        <Typography
          sx={{
            color: "#A1968B",
            textAlign: "right",
            fontSize:"12px",
            fontFamily: "Lato",
            fontWeight: "400",
            lineHeight: "45px",
            mt:-2
          }}
        >
          {/* Mostrar el precio con descuento */}
      ${precioConDescuento.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCardByCategory;
