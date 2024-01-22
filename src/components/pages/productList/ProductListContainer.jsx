import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import { db } from "../../../FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    let refCollectons = collection(db, "products");

    let consultaFiltrada = query(
      refCollectons,
      where("category", "==", category)
    );
    console.log("soy la consulta filtrada:", consultaFiltrada);

    const getData = async () => {
      let res = await getDocs(consultaFiltrada);
      let productosFinales = res.docs.map((prod) => {
        return { ...prod.data(), id: prod.id };
      });
      console.log(productosFinales);
      setProducts(productosFinales);
    };
    getData();
  }, [category]);

  return (
    <>
      <ProductList products={products}  category={category} />
    </>
  );
};

export default ProductListContainer;
