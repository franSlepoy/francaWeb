import { Box } from "@mui/material";
import ProductDetail from "./productDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../FirebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
   let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id)

    const getData = async () => {
      
       let res = await getDoc(refDoc);
      

      setProduct({...res.data(), id: res.id }); 
    };
    getData();
  }, [id]);
  return (
    <Box>
      <ProductDetail product={product}/>
    </Box>
  );
};

export default ProductDetailContainer;
