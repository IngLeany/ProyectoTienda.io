import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import { useLocation } from "react-router-dom";
import imagenes from "../../Barrel/Barrel"; // Asegúrate de tener los productos y las imágenes
import "./SearchResults.css";

export const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    // Aquí deberías realizar la búsqueda real en tu API o base de datos.
    // Este ejemplo utiliza datos de ejemplo para la demostración.
    const productos = [
      // Simula productos disponibles
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
      {
        id: 2,
        nombre: "Vestido de baño",
        descripcion: "Dos piezas con dorado",
        precio: "$119.900",
        imagen: imagenes.vestidodebañodospiezacondorado,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 3,
        nombre: "Vestido de baño",
        descripcion: "Dos piezass strapless",
        precio: "$98.500",
        imagen: imagenes.vestidodebañodospiezasstrapless,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 4,
        nombre: "Vestido de baño",
        descripcion: "Dos piezas con moño",
        precio: "$98.000",
        imagen: imagenes.cuatro,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 5,
        nombre: "Pareo",
        precio: "$185.900",
        imagen: imagenes.cuatro,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 6,
        nombre: "Vestido de baño",
        descripcion: "Dos pieza",
        precio: "$98.5oo",
        imagen: imagenes.cinco,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 7,
        nombre: "Pareo",
        precio: "$185.000",
        imagen: imagenes.cinco,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 8,
        nombre: "Vestido de baño",
        descripcion: "Dos pieza strapless con dorado",
        precio: "$85.900",
        imagen: imagenes.seis,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 9,
        nombre: "Vestido de baño",
        descripcion: "Dos pieza con dorado",
        precio: "$98.500",
        imagen: imagenes.siete,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 10,
        nombre: "Vestido de baño",
        descripcion: "Dos pieza rojo con dorado",
        precio: "$98.500",
        imagen: imagenes.ocho,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 11,
        nombre: "Conjunto",
        descripcion: "Croptop y pantalón",
        precio: "$130.000",
        imagen: imagenes.nueve,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 12,
        nombre: "Kimono",
        descripcion: "Manga larga",
        precio: "$110.000",
        imagen: imagenes.nueve,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 13,
        nombre: "Vestido",
        descripcion: "Largo",
        precio: "$80.000",
        imagen: imagenes.diez,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 14,
        nombre: "Conjunto",
        descripcion: "Croptop y pantalón",
        precio: "$130.900",
        imagen: imagenes.once,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 15,
        nombre: "Kimono",
        descripcion: "Manga larga",
        precio: "$110.000",
        imagen: imagenes.doce,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 16,
        nombre: "Conjunto",
        descripcion: "Croptop y pantalón aladino",
        precio: "$130.900",
        imagen: imagenes.trece,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 17,
        nombre: "Kimono",
        descripcion: "Manga larga",
        precio: "$110.000",
        imagen: imagenes.catorce,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 18,
        nombre: "Conjunto",
        descripcion: "Croptop y falda",
        precio: "$130.000",
        imagen: imagenes.quince,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 19,
        nombre: "Kimono",
        descripcion: "Manga larga",
        precio: "$110.000",
        imagen: imagenes.diezyseis,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 20,
        nombre: "Conjunto",
        descripcion: "Croptop, pantalón, short y camisa",
        precio: "$298.800",
        imagen: imagenes.diezysiete,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 21,
        nombre: "Conjunto",
        descripcion: "Croptop, pantalón, short y camisa",
        precio: "$298.800",
        imagen: imagenes.diezyocho,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 22,
        nombre: "Conjunto",
        descripcion: "Croptop, pantalón, short y camisa",
        precio: "$298.800",
        imagen: imagenes.diezynueve,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 23,
        nombre: "Conjunto",
        descripcion: "Croptop, pantalón, short y camisa",
        precio: "$298.800",
        imagen: imagenes.veinte,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 24,
        nombre: "Pijama",
        descripcion: "Camiseta clásica con short clásico",
        precio: "$192.800",
        imagen: imagenes.ventiuno,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 25,
        nombre: "Pijama",
        descripcion: "Camiseta clásica con capri",
        precio: "$196.800",
        imagen: imagenes.veintidos,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 26,
        nombre: "Pijama",
        descripcion: "Camiseta manga larga con pantalón largo",
        precio: "$214.800",
        imagen: imagenes.pijama,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 27,
        nombre: "Pijama",
        descripcion: "Blusa básica con pantalón largo",
        precio: "$180.800",
        imagen: imagenes.pijama1,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 28,
        nombre: "Pijama",
        descripcion: "Camiseta clásica con short envolvente",
        precio: "$192.800",
        imagen: imagenes.pijama3,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 29,
        nombre: "Kimono",
        precio: "$170.800",
        imagen: imagenes.kimono,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 30,
        nombre: "Batola Básica",
        precio: "$220.800",
        imagen: imagenes.batola,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 31,
        nombre: "Batola japonesa",
        precio: "$193.800",
        imagen: imagenes.batola2,
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
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
      },
      {
        id: 35,
        nombre: "Pijama niña",
        descripcion: "Blusa clásica con short clásico",
        precio: "$65.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 36,
        nombre: "Pijama niña/niño",
        descripcion: "Camisa clásica con pantalón clásico",
        precio: "$120.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 37,
        nombre: "Pijama niña/niño",
        descripcion: "camisa clásica con pantalón clásico",
        precio: "$120.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 38,
        nombre: "Pijama",
        descripcion: "Blusa básica con short",
        precio: "$139.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 39,
        nombre: "Pijama ",
        descripcion: "Camisa básica con pantalón clásico ",
        precio: "$145.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 40,
        nombre: "Pijama",
        descripcion: "Camisa clásica con pantalón clásico",
        precio: "$152.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 41,
        nombre: "Pijama",
        descripcion: "Camisa clásica con pantalón clásico",
        precio: "$152.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 42,
        nombre: "Pijama",
        descripcion: "Camisa clásica con pantalón clásico",
        precio: "$175.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 43,
        nombre: "Levantadora",
        precio: "$111.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 44,
        nombre: "Pijama",
        descripcion: "Camisa clásica con pantalón clásico",
        precio: "$175.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 45,
        nombre: "Pijama hombre",
        descripcion: "Camiseta con bermuda",
        precio: "$115.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 46,
        nombre: "Pijama",
        descripcion: "Batola básica",
        precio: "$85.800",
        imagen: "",
        link: "/ShopSingle",
      },
      {
        id: 47,
        nombre: "Pijama",
        descripcion: "Camiseta clásica con pantalón clásico",
        precio: "$175.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 48,
        nombre: "Pijama",
        descripcion: "Camiseta clásica con pantalón clásico ",
        precio: "175.800",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 49,
        nombre: "Servilletas",
        precio: "$14.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 50,
        nombre: "Servilletas",
        precio: "$14.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 51,
        nombre: "Servilletas",
        precio: "$14.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 52,
        nombre: "Servilletas",
        precio: "$14.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 53,
        nombre: "Servilleteros",
        precio: "$14.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 54,
        nombre: "Servilleteros",
        precio: "$14.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 55,
        nombre: "Delantal",
        precio: "$69.900",
        iimagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 56,
        nombre: "Delantal ",
        precio: "$69.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 57,
        nombre: "Manteles",
        precio: "$139.900",
        precio: "$299.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 58,
        nombre: "Manteles",
        precio: "$139.900",
        a: 299.9,
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 59,
        nombre: "Coge ollas",
        precio: "$14.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 60,
        nombre: "Coge ollas",
        precio: "$14.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 61,
        nombre: "Individuales",
        precio: "$19.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 62,
        nombre: "Bolso pícni",
        precio: "$79.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 63,
        nombre: "Bolso playero en cascara de arroz",
        precio: "$89.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 64,
        nombre: "Cojines",
        precio: "$59.900",
        imimagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
      {
        id: 65,
        nombre: "Sandalias",
        precio: "$89.900",
        imagen: "",
        link: "/ShopSingle",
        categoria: "IKA(SWIMSUITS)",
      },
    ];

    // Filtra productos que coinciden con la consulta
    const filteredResults = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  }, [query]);

  return (
    <>
    <Navbar />
    <div className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-0">
            <a href="/">Inicio</a> <span className="mx-2 mb-0">/</span>{" "}
            <strong className="text-black">Productos</strong>
          </div>
        </div>
      </div>
    </div>

    <div className="search-results">
      <h2> {query}</h2>
      <div className="results-list">
        {results.length > 0 ? (
          results.map((producto) => (
            <div key={producto.id} className="result-item">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>{producto.precio}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
    <FooterHome />
    </>
  );
};