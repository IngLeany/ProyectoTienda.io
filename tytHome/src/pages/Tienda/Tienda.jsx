import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import vestidodebaño1 from "../../assets/images/vestidodebaño1.png";

import "./Tienda.css";


export const Tienda = () => {
  return (
    <>
      <Navbar />

<div className="producto">
    <img src={vestidodebaño1} alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
<div className="producto">
    <img src="producto.jpg" alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
<div className="producto">
    <img src="producto.jpg" alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
<div className="producto">
    <img src="producto.jpg" alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
<div className="producto">
    <img src="producto.jpg" alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
<div className="producto">
    <img src="producto.jpg" alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
<div className="producto">
    <img src="producto.jpg" alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
<div className="producto">
    <img src="producto.jpg" alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
<div className="producto">
    <img src="producto.jpg" alt="Producto"/>
    <div className="producto-info">
        <h2>Nombre del Producto</h2>
        <p className="precio">Precio (COP): $100.000</p>
        <p className="precio">Precio (USD): $30</p>
    </div>
</div>
      <FooterHome />
    </>
  );
};
