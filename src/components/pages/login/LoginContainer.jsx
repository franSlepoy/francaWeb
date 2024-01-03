import { useState } from "react";
import Login from "./Login";
import LoginExitoso from "./LoginExitoso";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { login } from "../../../store/authThunk";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const { handleSubmit, handleChange, errors, setErrors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      try {
        const result = await dispatch(login(data));
        console.log("result: ", result);
        if (result.type === "login/rejected") {
          //renderizar new error en formulario
          setErrors({
            email: "Este usuario no se encuentra en el sistema!",
          });
          return;
        } else {
          setUserData(result.userData); // Almacena los datos del usuario
          setLoginSuccess(true);
        }
      } catch (error) {
        console.log("error del catch del dispatch login ", error);
      }
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

  return (
    <>
      {loginSuccess ? (
        <LoginExitoso userData={userData} /> // Pasa los datos del usuario al componente LoginExitoso
      ) : (
        <Login
          showPassword={showPassword}
          handleShow={handleShow}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          dispatch={dispatch}
        />
      )}
    </>
  );
};

export default LoginContainer;
