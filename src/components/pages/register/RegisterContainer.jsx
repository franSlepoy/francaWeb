import { useState } from "react";
import Register from "./Register";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../../FirebaseConfig";
import { db } from "../../../FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const RegisterContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
    },
    onSubmit: async (data) => {
      try {
        // Llamamos a la función de registro de Firebase
        const userCredential = await register({ email: data.email, password: data.password });
  
        // Creamos un nuevo documento en la colección 'users' en Firestore
        await addDoc(collection(db, "users"), {
          displayName: data.displayName, // Utilizamos el valor del formulario
          email: data.email,
          rol: "cliente",
        });
  
        console.log("Registro exitoso:", userCredential.user);
        // Puedes agregar lógica adicional aquí, como redireccionar al usuario a una página de bienvenida
      } catch (error) {
        console.error("Error al registrar:", error.message);
      }
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string("Deben ser caracteres")
        .email("No corresponde con un email válido")
        .required("Este campo es obligatorio"),
      password: Yup.string("Deben ser caracteres")
        .required("Este campo es obligatorio")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
      confirmPassword: Yup.string("Deben ser caracteres")
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
    }),
  });

  return (
    <Register
      showPassword={showPassword}
      handleShow={handleShow}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default RegisterContainer;
