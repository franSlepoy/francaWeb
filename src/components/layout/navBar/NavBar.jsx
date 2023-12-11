import { Box, Typography } from "@mui/material";
import { menu } from "../../../router/nevigation";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>

      <Box>
        <Box width={"100%"}>
          <Typography sx={{color: "#FFF6EE", bgcolor:"#006F6F", fontSize:"20px", fontStyle:"italic", fontWeight:"400", lineHeight:"60px", textAlign:"center"}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet.
          </Typography>
        </Box>
        <Box textAlign={"center"} sx={{mt:"42px", mb:"42px"}}>
          <img src="public/imagenes/Group.svg" alt="" />
        </Box>

        <Box display={"flex"} justifyContent={"space-around"}>
          {menu.map((item) => {
            return (
              <Link key={item.id} sx={{ flexGrow: 1 }} to={item.path}>
                <Typography sx={{ ml: 3, mt: "10px" }}>{item.title}</Typography>
              </Link>
            );
          })}
          
          
        </Box>
        <Box mt={1} ml={15} display={"flex"}>
            <Link to={"/login"}>
              <Typography>Login</Typography>
            </Link>
            <Link to={"/register"}>
              <Typography ml={3}>register</Typography>
            </Link>
          </Box>
        
      </Box>
    </>
  );
};

export default NavBar;
