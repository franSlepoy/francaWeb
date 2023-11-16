import HomeContainer from "../components/pages/home/HomeContainer";
import ProductListContainer from "../components/pages/productList/ProductListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "products",
    path: "/category/:categoryName",
    Element: ProductListContainer ,
  },

];
