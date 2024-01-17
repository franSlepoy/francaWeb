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
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { loginGoogle } from "../../../store/authThunk";
import { useState } from "react";
import LoginExitoso from "./LoginExitoso";
import ButtonFranca from "../../common/ButtonFranca";
const Login = ({
  showPassword,
  handleShow,
  handleSubmit,
  handleChange,
  errors,
  dispatch,
}) => {
  const [googleLoginSuccess, setGoogleLoginSuccess] = useState(false);
  const handleGoogleLogin = async () => {
    try {
      await dispatch(loginGoogle());
      setGoogleLoginSuccess(true);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };
  return (
    <>
      <Box width={"35%"} m={"auto"}>
        <Typography
          sx={{
            color: "#172826",
            fontFamily: "Lora",
            fontSize: "35px",
            fontWeight: "400",
            lineHeight: "45px",
            mt: "80px",
          }}
        >
          Iniciar sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          {googleLoginSuccess ? (
            // Renderiza LoginExitoso si el registro con Google fue exitoso
            <LoginExitoso />
          ) : (
            // Renderiza el formulario de inicio de sesión
            <Box display={"flex"} flexDirection={"column"}>
              <TextField
                name="email"
                onChange={handleChange}
                sx={{ mt: 3 }}
                label="Email"
                variant="outlined"
                error={errors.email ? true : false}
                helperText={errors.email}
              />

              <FormControl sx={{ mt: 3 }} variant="outlined">
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
              <FormHelperText>{errors.password}</FormHelperText>
              
              <Box mt={3} display={"flex"} justifyContent={"space-between"}>
                <ButtonFranca title={"Enviar"} type={"submit"} width={"45%"} />

                <Button
                  sx={{
                    textAling: "center",
                    width: "45%",
                    p: "10px",
                    borderRadius: "50px",
                    color: "#006F6F",
                    fontFamily: "Lato",
                    fontSize: "15px",
                    fontWeight: "400",
                    lineHeight: "28px",
                    letterSpacing: "1.5px",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "transparent", 
                    },
                  }}
                  variant="text"
                  onClick={handleGoogleLogin}
                >
                  Ingresar con Google
                </Button>
              </Box>
              <Box
                display={"flex"}
                mt={8}
                sx={{
                  fontFamily: "Lato",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "13px",
                  letterSpacing: "-0.36px",
                }}
              >
                <Typography sx={{ color: "rgba(0, 0, 0, 0.46)" }}>
                  ¿No tenés cuenta?
                </Typography>
                <Link to={"/register"}>
                  <Typography sx={{ color: "#006F6F", ml: 1 }}>
                    Crear cuenta ahora
                  </Typography>
                </Link>
               
              </Box>
              
            </Box>
          )}
        </form>
      </Box>
    </>
  );
};

export default Login;
