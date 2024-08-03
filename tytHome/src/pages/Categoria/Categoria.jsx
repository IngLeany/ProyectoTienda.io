import React from 'react';
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import { useParams } from 'react-router-dom';
import imagenes from '../../Barrel/Barrel';
import "./Categoria.css";

// Datos de ejemplo para productos por categoría
export const productosPorCategoria = {
  "Pijamas / Ropa de Descanso": [
    {
      id: 1,
      nombre: "Pijama",
      descripcion: "Camiseta clásica con short clásico",
      precio: "$192.800",
      imagen: imagenes.pijama,
      link: "/ShopSingle",
      categoria: "CLOTO - River",
    },
    // Más productos
  ],
  "Vestidos de baño / Sandalias": [
    {
      id: 2,
      nombre: "Vestido de baño",
      descripcion: "Dos piezas strapless",
      precio: "$98.900",
      imagen: imagenes.vestidodebañodospiezas,
      link: "/ShopSingle",
      categoria: "IKA - Swimsuits",
    },
    // Más productos
  ],
  "Manteles / Caminos de mesa / Servilleteros / Delantales / Coge ollas / Individuales / Bolso pícnic / bolsos playeros / Cojines": [
    {
      id: 3,
      nombre: "Mantel",
      descripcion: "Mantel de lino para ocasiones especiales",
      precio: "$120.000",
      imagen: imagenes.mantel,
      link: "/ShopSingle",
      categoria: "HOME - Lenceria de casa",
    },
    // Más productos
  ],
  "Ropa de lino": [
    {
      id: 4,
      nombre: "Camisa de lino",
      descripcion: "Camisa ligera y fresca",
      precio: "$85.000",
      imagen: imagenes.camisaLino,
      link: "/ShopSingle",
      categoria: "REBECA",
    },
    // Más productos
  ],
};

export const Categoria = () => {
  const { nombre } = useParams();
  const productosCategoria = productosPorCategoria[nombre] || [];

  return (
    <>
    <Navbar />
    <div className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-0">
            <a href="/">Inicio</a> <span className="mx-2 mb-0">/</span>{" "}
            <strong className="text-black">Categorias</strong>
          </div>
        </div>
      </div>
    </div>
    <div className="categoria">
      <h2>{nombre}</h2>
      <ul>
        {productosCategoria.length > 0 ? (
          productosCategoria.map((producto, index) => (
            <li key={index}>
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <a href={producto.link}>Ver más</a>
              </div>
            </li>
          ))
        ) : (
          <li>No hay productos en esta categoría.</li>
        )}
      </ul>
    </div>
    <FooterHome />
    </>

  );
};

export default Categoria;
