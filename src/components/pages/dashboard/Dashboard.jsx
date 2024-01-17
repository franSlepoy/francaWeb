import { Typography } from "@mui/material";

const Dashboard = ({generarDocumentos}) => {
  return (
    <div>
      <Typography variant="h1" textAlign={"center"}>
        panel de administrador
      </Typography>
      <button onClick={generarDocumentos}>generar documentos</button>
    </div>
  );
};

export default Dashboard;
