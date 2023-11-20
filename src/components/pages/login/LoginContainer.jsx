import { useState } from "react";
import Login from "./Login";
import { useFormik } from "formik";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  console.log(showPassword);
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("se envio el formulario", data);
    },
  });
  return (
    <Login
      showPassword={showPassword}
      handleShow={handleShow}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default LoginContainer;
