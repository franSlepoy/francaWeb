import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const Login = ({ showPassword, handleShow, handleSubmit, handleChange }) => {
  return (
    <Box display={"flex"}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          onChange={handleChange}
          sx={{ m: 3 }}
          label="Email"
          variant="outlined"
        />

        <FormControl sx={{ m: 3, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShow}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button type="submit" sx={{ m: 3, width: "300px" }} variant="contained">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Login;
