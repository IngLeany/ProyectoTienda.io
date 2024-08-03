import React from 'react';
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import { useParams } from 'react-router-dom';
import imagenes from '../../Barrel/Barrel';
import "./Coleccion.css";

// Datos de ejemplo para productos por colección
const productosPorColeccion = {
  "Mixtura Tropical": [
    {
      id: 1,
      nombre: "Vestido de baño",
      descripcion: "Dos piezas strapless",
      precio: "$98.900",
      precioUSD: "$0.024",
      imagen: imagenes.vestidodebañodospiezas,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Mixtura Tropical",
    },
 
  ],
  "Pascua": [
    {
      id: 2,
      nombre: "Vestido de baño",
      descripcion: "Dos piezas con dorado",
      precio: "$119.900",
      imagen: imagenes.vestidodebañodospiezacondorado,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Pascua",
    },

  ],
  "Otoño": [
    {
      id: 24,
      nombre: "Pijama",
      descripcion: "Camiseta clásica con short clásico",
      precio: "$192.800",
      imagen: imagenes.ventiuno,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 25,
      nombre: "Pijama",
      descripcion: "Camiseta clásica con capri",
      precio: "$196.800",
      imagen: imagenes.veintidos,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 26,
      nombre: "Pijama",
      descripcion: "Camiseta manga larga con pantalón largo",
      precio: "$214.800",
      imagen: imagenes.pijama,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 27,
      nombre: "Pijama",
      descripcion: "Blusa básica con pantalón largo",
      precio: "$180.800",
      imagen: imagenes.pijama1,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 28,
      nombre: "Pijama",
      descripcion: "Camiseta clásica con short envolvente",
      precio: "$192.800",
      imagen: imagenes.pijama3,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 29,
      nombre: "Kimono",
      precio: "$170.800",
      imagen: imagenes.kimono,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 30,
      nombre: "Batola Básica",
      precio: "$220.800",
      imagen: imagenes.batola,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 31,
      nombre: "Batola japonesa",
      precio: "$193.800",
      imagen: imagenes.batola2,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 32,
      nombre: "Pijama",
      descripcion: "Blusa básica con pantalón clásico",
      precio: "$175.800",
      imagen: imagenes.pijamaotono,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      colecciones: "Otoño"
    },
    {
      id: 33,
      nombre: "Batola",
      descripcion: "básica",
      precio: "$135.800",
      imagen: imagenes.otonopijama,
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      colecciones: "Otono"
    },
    {
      id: 34,
      nombre: "Pijama niña",
      descripcion: "blusa clásica con short clásico",
      precio: "$65.8OO",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 35,
      nombre: "Pijama niña",
      descripcion: "Blusa clásica con short clásico",
      precio: "$65.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 36,
      nombre: "Pijama niña/niño",
      descripcion: "Camisa clásica con pantalón clásico",
      precio: "$120.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 37,
      nombre: "Pijama niña/niño",
      descripcion: "camisa clásica con pantalón clásico",
      precio: "$120.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 38,
      nombre: "Pijama",
      descripcion: "Blusa básica con short",
      precio: "$139.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 39,
      nombre: "Pijama ",
      descripcion: "Camisa básica con pantalón clásico ",
      precio: "$145.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 40,
      nombre: "Pijama",
      descripcion: "Camisa clásica con pantalón clásico",
      precio: "$152.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 41,
      nombre: "Pijama",
      descripcion: "Camisa clásica con pantalón clásico",
      precio: "$152.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 42,
      nombre: "Pijama",
      descripcion: "Camisa clásica con pantalón clásico",
      precio: "$175.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 43,
      nombre: "Levantadora",
      precio: "$111.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 44,
      nombre: "Pijama",
      descripcion: "Camisa clásica con pantalón clásico",
      precio: "$175.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 45,
      nombre: "Pijama hombre",
      descripcion: "Camiseta con bermuda",
      precio: "$115.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 46,
      nombre: "Pijama",
      descripcion: "Batola básica",
      precio: "$85.800",
      imagen: "",
      link: "/ShopSingle",
      coleccion: "Otoño",
    },
    {
      id: 47,
      nombre: "Pijama",
      descripcion: "Camiseta clásica con pantalón clásico",
      precio: "$175.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
    {
      id: 48,
      nombre: "Pijama",
      descripcion: "Camiseta clásica con pantalón clásico ",
      precio: "175.800",
      imagen: "",
      link: "/ShopSingle",
      categoria: "IKA(SWIMSUITS)",
      coleccion: "Otoño",
    },
  ],
};


export const Coleccion = () => {
  const { nombre } = useParams();
  const productosColeccion = productosPorColeccion[nombre] || [];

  return (
    
    <>
    <Navbar />
    <div className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-0">
            <a href="/">Inicio</a> <span className="mx-2 mb-0">/</span>{" "}
            <strong className="text-black">Colecciones</strong>
          </div>
        </div>
      </div>
    </div>
    
    <div className="coleccion">
      <h2>{nombre}</h2>
      <ul>
        {productosColeccion.length > 0 ? (
          productosColeccion.map((producto, index) => (
            <li key={index}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>{producto.precio}</p>
              <a href={producto.link}>Ver más</a>
            </li>
          ))
        ) : (
          <li>No hay productos en esta colección.</li>
        )}
      </ul>
    </div>
    <FooterHome />
    </>
  );
};

export default Coleccion;
