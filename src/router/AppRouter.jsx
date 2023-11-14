import React from "react";
import { Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {menuRoutes.map(({ id, path, Element }) => (
        <Route key={id} path={path} element={<Element />} />
      ))}

      <Route path="*" element={<h1>404 no encontrada</h1>} />
    </Routes>
  );
};

export default AppRouter;
