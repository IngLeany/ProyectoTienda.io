import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import vestidodebaño1 from "../../assets/images/vestidodebaño1.png";

import "./Tienda.css";


export const Tienda = () => {
  return (
    <>
      <Navbar />
<div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="/">Inicio</a> <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Historia</strong>
              </div>
            </div>
          </div>
        </div>
      
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
