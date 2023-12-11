import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavBarContainer from "./navBar/NavBarContainer";

const Layout = () => {
  return (
    <>
      <div>
        <NavBarContainer />
      </div>

      <div style={{border:"peru solid",minHeight:"calc(100vh - 60px - 200px)"}}>
        <Outlet />
      </div>

      <div style={{border:"peru solid",height:"200px"}}>
        <FooterContainer />
      </div>
    </>
  );
};

export default Layout;
