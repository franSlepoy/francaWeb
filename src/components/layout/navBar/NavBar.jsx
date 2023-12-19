import { Box, Divider, Typography } from "@mui/material";
import { menu } from "../../../router/nevigation";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  return (
    <>
      <Box width={"100%"}>
        <Typography
          sx={{
            fontFamily: "Lora",
            color: "#FFF6EE",
            bgcolor: "#006F6F",
            fontSize: "20px",
            fontStyle: "italic",
            fontWeight: "400",
            lineHeight: "60px",
            margin:"auto",
            height: "43px",
            display: "flex",
            pl:2,
            alignItems: "center", // Centra verticalmente el contenido
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit
          amet.
        </Typography>
      </Box>

      <Box sx={{ width: "80%", margin: "auto" }}>
        <Box display={"flex"}>
          <Box flex="1">
            <Typography color={"transparent"}>caja transparente</Typography>
          </Box>
          <Box flex="1" sx={{ textAlign: "center", mt: "42px", mb: "42px" }}>
            <Link to={"/"}>
              <img src="public/imagenes/Group.svg" alt="" />
            </Link>
          </Box>

          <Box flex="1" mt={"48px"} display={"flex"} justifyContent={"end"}>
            <SearchIcon sx={{ mt: 2 }} />
            <Link style={{ textDecoration: "none" }} to={"/register"}>
              <Typography
                ml={3}
                sx={{
                  fontFamily: "Lora",
                  color: "#172826",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "60px",
                }}
              >
                Register
              </Typography>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <Typography
                ml={3}
                sx={{
                  fontFamily: "Lora",
                  color: "#172826",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "60px",
                }}
              >
                Login
              </Typography>
            </Link>
            <Box mt={2} ml={3}>
              <img src="public/imagenes/Vector.svg" alt="" />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ width: "100%" }} />
        <Box display={"flex"} justifyContent={"space-between"}>
          {menu.map((item) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={item.id}
                sx={{ flexGrow: 1 }}
                to={item.path}
              >
                <Typography
                  sx={{
                    fontFamily: "Lora",
                    color: "#172826",
                    mt: "10px",
                    mb: "10px",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "60px",
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
            );
          })}
        </Box>
        <Divider sx={{ width: "100%" }} />
      </Box>
    </>
  );
};

export default NavBar;
