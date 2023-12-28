import { useState } from "react";
import CheckOut from "./CheckOut";

const CheckOutContainer = () => {
  const [selectedValue, setSelectedValue] = useState(""); // Estado para almacenar el valor seleccionado

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Actualizar el valor seleccionado
  };

  return <CheckOut selectedValue={selectedValue} handleChange={handleChange} />;
};

export default CheckOutContainer;
