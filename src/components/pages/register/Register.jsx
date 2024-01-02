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
import { loginGoogle } from "../../../store/authThunk";
import { Link } from "react-router-dom";
import RegisterExitoso from "./RegistroExitoso";
import ButtonFranca from "../../common/ButtonFranca";

const Register = ({
  showPassword,
  handleShow,
  handleSubmit,
  handleChange,
  errors,
  registrationSuccess,
  dispatch
}) => {
  return (
    <Box width={"35%"} m={"auto"}>
       {registrationSuccess ? ( // Mostrar mensaje de éxito si el registro fue exitoso
        <RegisterExitoso userData={{ displayName: "Nuevo Usuario" }} />
      ) : (
       <> 
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
        Crea una cuenta
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection={"column"}>
          <TextField
            name="displayName"
            onChange={handleChange}
            sx={{ mt: 3 }}
            label="Nombre completo"
            variant="outlined"
            error={errors.displayName ? true : false}
            helperText={errors.displayName}
          />
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
              Contraseña
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
          <FormHelperText >{errors.password}</FormHelperText>

          <FormControl sx={{ mt: 3 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirmar Contraseña
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
          <FormHelperText >
            {errors.confirmPassword}
          </FormHelperText>
          <Box mt={3} display={"flex"} justifyContent={"space-between"}>
          <ButtonFranca title={"Enviar"} type={"submit"} width={"45%"}/>
          <Button
                sx={{
                 
                  textAling: "center",
                  width: "45%",
                  p: "10px",
                  borderRadius: "50px",
                  borderColor: "#006F6F",
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
                onClick={() => dispatch(loginGoogle())}
              >
                Ingresar con Google
              </Button>
          </Box>
          <Box display={"flex"} mt={8}sx={{fontFamily:"Lato", fontSize:"18px", fontWeight:"400", lineHeight:"13px", letterSpacing:"-0.36px" }}>
            <Typography sx={{color:"rgba(0, 0, 0, 0.46)"}}>
            ¿Ya tenés cuenta? 
            </Typography>
            <Link to={"/login"}>
            <Typography sx={{color:"#006F6F", ml:1}}>
            Iniciar sesión ahora
            </Typography>
            </Link>
            
          </Box>
        </Box>
      </form>
      </>
      )}
    </Box>
  );
};

export default Register;
