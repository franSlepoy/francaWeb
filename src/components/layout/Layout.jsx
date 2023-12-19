import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavBarContainer from "./navBar/NavBarContainer";

const Layout = () => {
  return (
    <>
      <div>
        <NavBarContainer />
      </div>

      <div >
        <Outlet />
      </div>

      <div>
        <FooterContainer />
      </div>
    </>
  );
};

export default Layout;
