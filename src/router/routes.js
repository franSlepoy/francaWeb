import Asesoramiento from "../components/pages/Asesoramiento/Asesoramiento";
import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import ProductListContainer from "../components/pages/productList/ProductListContainer";
import QuienesSomos from "../components/pages/quienesSomos/QuienesSomos";
import RegisterContainer from "../components/pages/register/RegisterContainer";

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
  {
    id: "login",
    path: "/login",
    Element: LoginContainer ,
  },{
    id: "register",
    path: "/register",
    Element: RegisterContainer ,
  },
  {
    id: "Asesoramiento",
    path: "/Asesoramiento",
    Element: Asesoramiento ,
  },{
    id: "QuienesSomos",
    path: "/QuienesSomos",
    Element: QuienesSomos ,
  },
];
