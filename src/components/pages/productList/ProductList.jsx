import { Typography } from "@mui/material";

const ProductList = () => {
  return (
    <>
       <Typography
            sx={{
              mt: 10,
              color: "#0FA24A",
              fontFamily: "Lora",
              fontSize: "35px",
              fontWeight: "400",
              lineHeight: "45px",
              textAlign:"center"
            }}
          >
            lista de productos
          </Typography>
    </>
  );
};

export default ProductList;
