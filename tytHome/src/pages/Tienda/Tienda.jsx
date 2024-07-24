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
    { id: 3, 
      nombre: 'Vestido de baño 3', 
      precio: 98.500, 
      imagen: '', 
      tallas: ['S', 'M', 'L', 'XL']
     },
    { id: 4, nombre: 'vestido de baño 4', precio: 98.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 5, nombre: 'Pareo 5', precio: 185.900, imagen: '' },
    { id: 6, nombre: 'Vestido de baño 6', precio: 98.500, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },  
    { id: 7, nombre: 'Pareo 7', precio: 185.000, imagen: ''},
    { id: 8, nombre: 'Vestido de baño 8', precio: 85.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 9, nombre: 'Vestido de baño 9', precio: 98.500, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 10, nombre: 'Vestido de baño 10', precio: 98.500, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 11, nombre: 'Conjunto con croptop y pantalón 11', precio: 130.000, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 12, nombre: 'Kimono manga larga 12', precio: 110.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 13, nombre: 'Vestido largo 13', precio: 79.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 14, nombre: 'Conjunto con croptop y pantalón 14', precio: 129.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 15, nombre: 'Kimono manga larga 15', precio: 110.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 16, nombre: 'Conjunto con croptop y pantalón aladino 16', precio: 129.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 17, nombre: 'Kimono manga larga 17', precio: 110.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 18, nombre: 'Conjunto con croptop y falda 18', precio: 129.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 19, nombre: 'Kimono manga larga', precio: 110.900, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 20, nombre: 'Conjunto con croptop, pantalón, short ty camisa 20', precio: 298.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 21, nombre: 'Conjunto con croptop, pantalón, short ty camisa 21', precio: 298.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 22, nombre: 'Conjunto con croptop, pantalón, short ty camisa 22', precio: 298.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 23, nombre: 'Conjunto con croptop, pantalón, short ty camisa 23', precio: 298.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 24, nombre: 'Pijama  - camiseta clásica con short clásico 24,', precio: 129.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 25, nombre: 'Pijama  - camiseta clásica con capri 25,', precio: 196.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 26, nombre: 'Pijama  - camiseta manga larga con pantalón largo 26,', precio: 214.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 27, nombre: 'Pijama  - blusa básica con pantalón largo 27,', precio: 180.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 28, nombre: 'Pijama  - camiseta clásica con short envolvente 28,', precio: 192.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 29, nombre: 'Kimono 29,', precio: 170.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 30, nombre: 'Batola Básica 30,', precio: 220.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 31, nombre: 'Batola japonesa 31,', precio: 193.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 32, nombre: 'Pijama - blusa básica con pantalón clásico 32,', precio: 175.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 33, nombre: 'Batola básica 33,', precio: 135.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 34, nombre: 'Pijama niña - blusa clásica con short clásico 34,', precio: 65.800, imagen: '' },
    { id: 35, nombre: 'Pijama niña - blusa clásica con short clásico 35,', precio: 65.800, imagen: '' },
    { id: 36, nombre: 'Pijama niña/niño - camisa clásica con pantalón clásico 36,', precio: 120.800, imagen: '' },
    { id: 37, nombre: 'Pijama niña/niño - camisa clásica con pantalón clásico 37,', precio: 120.800, imagen: '' },
    { id: 38, nombre: 'Pijama - blusa básica con short 38,', precio: 139.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 39, nombre: 'Pijama - camisa básica con pantalón clásico 39,', precio: 145.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 40, nombre: 'Pijama - camisa clásica con pantalón clásico 40,', precio: 152.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 41, nombre: 'Pijama - camisa clásica con pantalón clásico 41,', precio: 152.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 42, nombre: 'Pijama - camisa clásica con pantalón clásico 42,', precio: 175.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 43, nombre: 'Levantadora 43', precio: 111.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 44, nombre: 'Pijama - camisa clásica con pantalón clásico 44,', precio: 175.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 45, nombre: 'Pijama hombre - camiseta con bermuda 45,', precio: 115.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 46, nombre: 'Pijama - batola básica 46,', precio: 85.800, imagen: '' },
    { id: 47, nombre: 'Pijama - camiseta clásica con pantalón clásico 47,', precio: 175.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 48, nombre: 'Pijama - camiseta clásica con pantalón clásico 48,', precio: 175.800, imagen: '', tallas: ['S', 'M', 'L', 'XL'] },
    { id: 49, nombre: 'Servilletas 49,', precio: 14.900, imagen: ''},
    { id: 50, nombre: 'Servilletas 50,', precio: 14.900, imagen: ''},
    { id: 51, nombre: 'Servilletas 51,', precio: 14.900, imagen: ''},
    { id: 52, nombre: 'Servilletas 52,', precio: 14.900, imagen: ''},
    { id: 53, nombre: 'Servilleteros 53,', precio: 14.900, imagen: ''},
    { id: 54, nombre: 'Servilleteros 54,', precio: 14.900, imagen: ''},
    { id: 55, nombre: 'Delantal 55,', precio: 69.900, imagen: ''},
    { id: 56, nombre: 'Delantal 56,', precio: 69.900, imagen: ''},
    { id: 57, nombre: 'Manteles 57,', precio: 139.900, a: 299.900, imagen: ''},
    { id: 58, nombre: 'Manteles 58,', precio: 139.900, a: 299.900, imagen: ''},
    { id: 59, nombre: 'Coge ollas 59,', precio: 14.900, imagen: ''},
    { id: 60, nombre: 'Coge ollas 60,', precio: 14.900, imagen: ''},
    { id: 61, nombre: 'Individuales 61,', precio: 19.900, imagen: ''},
    { id: 62, nombre: 'Bolso pícni 62,', precio: 79.900, imagen: ''},
    { id: 63, nombre: 'Bolso playero en cascara de arroz 63,', precio: 89.900, imagen: ''},
    { id: 64, nombre: 'Cojines 64,', precio: 59.900, imagen: ''},
    { id: 65, nombre: 'Sandalias 65,', precio: 89.900, imagen: '', tallas: ['35', '36', '37', '38', '40'] },
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
