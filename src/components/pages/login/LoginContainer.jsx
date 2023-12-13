import { useState } from "react";
import Login from "./Login";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { login, loginGoogle } from "../../../store/authThunk";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    /* onSubmit: async (data) => {
      let result = await login(data);
      console.log("aca esta el usuario", result);
      dispatch(loginRedux(result.user));
    },  */

    onSubmit: (data) => {
      dispatch(login(data));
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string("Deben ser caracteres")
        .email("no corresponde con un email valido")
        .required("Este campo es obligatorio"),
      password: Yup.string("Deben ser caracteres").required(
        "Este campo es obligatorio"
      ),
    }),
  });

  /*   //funcion de redux sin Thunks
  const igresarConGoogle = async () => {
    let res = await loginWithGoogle();
    dispatch(loginRedux(res.user));
  }; */
  return (
    <>
      <Login
        showPassword={showPassword}
        handleShow={handleShow}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />

      <Button
        sx={{ m: 3, width: "300px" }}
        variant="contained"
        onClick={() => dispatch(loginGoogle())}
      >
        Ingresar con Google
      </Button>
    </>
  );
};

export default LoginContainer;
