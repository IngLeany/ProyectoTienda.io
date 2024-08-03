import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Página no encontrada</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
};
