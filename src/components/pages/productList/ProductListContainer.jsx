import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const { category, subcategory } = useParams();
  console.log(subcategory);
  console.log(category);
  return (
    <>
      <ProductList />
    </>
  );
};

export default ProductListContainer;
