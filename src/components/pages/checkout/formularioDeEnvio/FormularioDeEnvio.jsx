import { Box } from "@mui/material";
import CustomInput from "../../../common/CustomInput";
import CustomInputMUI from "../../../common/CustomInputMUI";


const FormularioDeEnvio = () => {
  return (
    <>
      <Box width={"80%"} margin={"auto"}>
        <Box width={"50%"} mt={5}>
          
          <CustomInputMUI label={"Nombre"} />
          <CustomInput label="Nombre" />
        </Box>
      </Box>
    </>
  );
};

export default FormularioDeEnvio;
