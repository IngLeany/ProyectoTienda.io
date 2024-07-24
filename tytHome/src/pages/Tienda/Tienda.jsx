import React from "react";
import {Outlet, Link} from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import vestidodebaño1 from "../../assets/images/vestidodebaño1.png";

// Importa tus estilos CSS aquí si es necesario
import "./Tienda.css";

export const Tienda = () => {
  // Array de productos simulado para demostración
  const productos = [
    {
      nombre: "VESTIDO DE BAÑO",
      descripcion: "DOS PIEZAS",
      precio: "$98.900",
      imagen: vestidodebaño1,
      link: "ShopSingle.js",
    },
    {
      nombre: "VESTIDO DE BAÑO",
      descripcion: "DOS PIEZAS CON BORDADO",
      precio: "$119.900",
      imagen: vestidodebaño1,  // Aquí deberías usar las imágenes correctas
      link: "ShopSingle.js",
    },
    // Puedes agregar más productos según sea necesario
  ];

  return (
    <>
      <Navbar />

      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="/">Inicio</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Tienda</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5" id="products-container">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="col-sm-6 col-lg-4 mb-4"
                data-aos="fade-up"
              >
                <div className="block-4 text-center border">
                  <figure className="block-4-image">
                    <a href={producto.link}>
                      <img
                        src={producto.imagen}
                        alt="Imagen de producto"
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>
                      <a href={producto.link}>{producto.nombre}</a>
                    </h3>
                    <p className="mb-0">{producto.descripcion}</p>
                    <p className="text-secondary font-weight-bold">
                      Precio: {producto.precio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-md-12 text-center">
              <div className="site-block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterHome />
      
    </>
  );
};
