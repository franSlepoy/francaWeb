import { Box } from "@mui/material";
import ProductDetail from "./productDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../FirebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { useEffect } from "react";

const ProductDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
   let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id)

    const getData = async () => {
      
       let res = await getDoc(refDoc);
       console.log(res)

     /*  setProduct(data); */
    };
    getData();
  }, [id]);
  return (
    <Box>
      <ProductDetail />
    </Box>
  );
};

export default ProductDetailContainer;
