import { Box, Button, Typography } from "@mui/material";

const Counter = ({counter, setCounter}) => {
  return (
    <>
    <Box display={"flex"}>
    <Button variant="outlined" onClick={() => setCounter(counter - 1)}>-</Button>
      <Typography p={2} m={1} border={" solid "}> {counter} </Typography>
      <Button variant="outlined" onClick={() => setCounter(counter + 1)}>+</Button>

      <Button variant="outlined" sx={{m:2}} >Agregar al carrito</Button>
    </Box>
      
    </>
  );
};

export default Counter;
