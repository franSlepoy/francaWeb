import { Box, Divider, IconButton, InputBase, Typography } from "@mui/material";
import { menu } from "../../../router/nevigation";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
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
            margin: "auto",
            height: "35px",
            display: "flex",
            pl: 2,
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
            <Box height={"25px"} display="flex" alignItems="center">
              <IconButton
                style={{
                  backgroundColor: "transparent",
                  "&:hover": { backgroundColor: "transparent" },
                }}
                disableTouchRipple
                onClick={handleSearchClick}
              >
                <img src="public/imagenes/lupa.png" alt="" />
              </IconButton>

              {isSearchVisible && (
                <Box>
                  <InputBase
                    placeholder="Buscar productos..."
                    // Aquí puedes agregar cualquier lógica adicional del buscador
                  />
                </Box>
              )}
            </Box>

            <Box width={"25px"} height={"25px"} ml={"25px"}>
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                <img src="public/imagenes/resgistro.svg" alt="" />
              </Link>
            </Box>

            <Box ml={"35px"}>
              <img src="public/imagenes/Vector.svg" alt="" />
            </Box>
          </Box>
        </Box>

        <Divider sx={{ width: "100%" }} />
        <Box display={"flex"} justifyContent={"space-between"} height={"42px"}>
          {menu.map((item) => (
            <Box
              key={item.id}
              style={{ position: "relative", flexGrow: 1 }}
              onMouseEnter={() => setHoveredCategory(item.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link style={{ textDecoration: "none" }} to={item.path}>
                <Typography
                  sx={{
                    fontFamily: "Lora",
                    color: "#172826",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "40px",
                    "&:hover": { fontWeight: "600" },
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
              {item.subcategories && hoveredCategory === item.id && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: -4,
                    width: "90%",
                    zIndex: 1,
                    backgroundColor: "#FFF6EE",
                    padding: 1,
                  }}
                >
                  {item.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      style={{ textDecoration: "none", display: "block" }}
                      to={subcategory.path}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Lora",
                          color: "#172826",
                          fontSize: "15px",
                          fontWeight: "400",
                          lineHeight: "25px",
                          "&:hover": { fontWeight: "600" },
                          
                        }}
                      >
                        {subcategory.title}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Divider sx={{ width: "100%" }} />
      </Box>
    </>
  );
};

export default NavBar;
