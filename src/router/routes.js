import Asesoramiento from "../components/pages/Asesoramiento/Asesoramiento";
import CheckOut from "../components/pages/checkout/CheckOut";
import FormularioDeEnvio from "../components/pages/checkout/formularioDeEnvio/FormularioDeEnvio";
import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
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
    path: "/category/:category/:subcategory",
    Element: ProductListContainer,
  },
  {
    id: "productDetail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },
  {
    id: "Asesoramiento",
    path: "/Asesoramiento",
    Element: Asesoramiento,
  },
  {
    id: "QuienesSomos",
    path: "/QuienesSomos",
    Element: QuienesSomos,
  },
  {
    id: "checkOut",
    path: "/checkOut",
    Element: CheckOut,
  },
  {
    id: "formularioDeEnvio",
    path: "/formularioDeEnvio",
    Element: FormularioDeEnvio,
  },
];
