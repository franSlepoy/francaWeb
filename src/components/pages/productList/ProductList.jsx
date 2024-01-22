import { Box, ImageList, Typography } from "@mui/material";
import ProductCardByCategory from "./ProductCardByCategory";
import { Link } from "react-router-dom";

const ProductList = ({ products, category }) => {
  return (
    <>
      <Box width={"80%"} margin={"auto"}>
        <Box mb={"20px"}>
          <Typography
            sx={{
              mt: "100px",
              color: "#172826",
              fontSize: "45px",
              lineHeight: "45px",
            }}
          >
            {category}
          </Typography>
        </Box>
        <ImageList variant="standard" cols={4} gap={18}>
          {products.map((product) => (
            <Link
              key={product.id}
              style={{ textTransform: "none", textDecoration: "none" }}
              to={`/productDetail/${product.id}`}
            >
              <ProductCardByCategory key={product.id} product={product} />
            </Link>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default ProductList;

