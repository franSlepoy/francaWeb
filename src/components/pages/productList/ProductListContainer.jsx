import { useParams } from "react-router-dom";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const { category, subcategory } = useParams();
  console.log(subcategory);
  console.log(category);

  // COLECCION --> CATEGORY 
  // DOCUMENTOS --> sillones, VENTANAS, ESPEJOS
  // sillones = [{id: "asdasdas", name: "Sillones y butacas", },{},{}]

  return (
    <>
      <ProductList />
    </>
  );
};

export default ProductListContainer;
