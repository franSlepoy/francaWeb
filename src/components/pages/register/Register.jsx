import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = ({ showPassword, handleShow, handleSubmit, handleChange, errors }) => {
  return (
    <Box display={"flex"}>
      <form onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection={"column"}>
          <TextField
            name="email"
            onChange={handleChange}
            sx={{ m: 3 }}
            label="Email"
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email}
          />

          <FormControl sx={{ m: 3, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              error={errors.password ? true : false}
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
          <FormHelperText sx={{ ml: 3 }}>{errors.password}</FormHelperText>

          <FormControl sx={{ m: 3, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type={showPassword ? "text" : "password"}
              error={errors.confirmPassword ? true : false}
              name="confirmPassword"
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
              label="Confirm Password"
            />
          </FormControl>
          <FormHelperText sx={{ ml: 3 }}>{errors.confirmPassword}</FormHelperText>

          <Button type="submit" sx={{ m: 3, width: "300px" }} variant="contained">
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Register;

