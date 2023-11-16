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
                <Typography sx={{ml:3, mt:"10px"}} >{item.title}</Typography>
              </Link>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
