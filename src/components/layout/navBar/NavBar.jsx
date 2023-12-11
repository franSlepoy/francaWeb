import { Box, Typography } from "@mui/material";
import { menu } from "../../../router/nevigation";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box>
          <h1>NavBar</h1>
        </Box>

        <Box display={"flex"}>
          {menu.map((item) => {
            return (
              <Link key={item.id} sx={{ flexGrow: 1 }} to={item.path}>
                <Typography sx={{ ml: 3, mt: "10px" }}>{item.title}</Typography>
              </Link>
            );
          })}
          <Box mt={1} ml={15} display={"flex"}>
            <Link to={"/login"}>
              <Typography>Login</Typography>
            </Link>
            <Link to={"/register"}>
              <Typography ml={3}>register</Typography>
            </Link>
          </Box>
          
        </Box>
        
      </Box>
    </>
  );
};

export default NavBar;
