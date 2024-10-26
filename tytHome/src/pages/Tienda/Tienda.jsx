import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import "./Tienda.css";

export const Tienda = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/productos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los productos!', error);
      });
  }, []);

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
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="col-sm-6 col-lg-4 mb-4"
                data-aos="fade-up">
                <div className="block-4 text-center border">
                  <figure className="block-4-image">
                    <Link to={`/shop/${producto.id}`}>
                      <img
                        src={`http://localhost:5000/images/${producto.imagen}`}
                        alt="Imagen de producto"
                        className="img-fluid"/>
                    </Link>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><Link to={`/shop/${producto.id}`}>{producto.nombre}</Link></h3>
                    <p className="mb-0">{producto.descripcion}</p>
                    <p className="text-secondary font-weight-bold">
                      Precio {producto.precio}</p>
                    {producto.precioUSD && (
                      <p className="text-secondary font-weight-bold">
                        Precio USD {producto.precioUSD}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterHome />
    </>
  );
};
