import { Box, Typography } from "@mui/material";
import { menu } from "../../../router/nevigation";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box width={"100%"}  >
        <Typography
          sx={{
            color: "#FFF6EE",
            bgcolor: "#006F6F",
            fontSize: "20px",
            fontStyle: "italic",
            fontWeight: "400",
            lineHeight: "60px",
            textAlign: "center",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit
          amet.
        </Typography>
      </Box>

      <Box backgroundColor={"#FFF6EE"} sx={{ width: "90%", margin:"auto" }}>
        <Box display={"flex"}>
          <Box  sx={{margin:"auto", mt: "42px", mb: "42px" }}>
            <img src="public/imagenes/Group.svg" alt="" />
          </Box>
          <Box  mt={"48px"} display={"flex"}>
            <Link to={"/register"}>
              <Typography>Register</Typography>
            </Link>
            <Link to={"/login"}>
              <Typography ml={3}>Login</Typography>
            </Link>
          </Box>
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
      </Box>
    </>
  );
};

export default NavBar;
