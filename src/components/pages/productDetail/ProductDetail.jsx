import { Box, Typography } from "@mui/material";
import Counter from "../../common/counter/Counter";
import CounterContainer from "../../common/counter/CounterContainer";

const ProductDetail = ({ product }) => {
  return (
    <Box  width={"80%"} margin={"auto"}>
      <Typography mt={"100px"}>Nombre:{product.nombre}</Typography>
      <Typography>Precio: {product.precio}</Typography>
      <Typography>Descripción: {product.descripcion}</Typography>
      
      <img width={"50%"} src={product.imagen1} alt="" />
      <CounterContainer/>
    </Box>
  );
};

export default ProductDetail;
