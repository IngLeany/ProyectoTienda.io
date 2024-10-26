import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import { FaWhatsapp } from "react-icons/fa";
import "./ShopSingle.css";

export const ShopSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [productos, setProductos] = useState([]);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(''); // Estado para la talla seleccionada

  useEffect(() => {
    axios.get(`http://localhost:5000/api/productos/${id}`)
      .then(response => {
        setProducto(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener el producto!', error);
      });

    axios.get('http://localhost:5000/api/productos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los productos!', error);
      });
  }, [id]);

  // Manejar cambio en la selección de talla
  const manejarCambioTalla = (e) => {
    setTallaSeleccionada(e.target.value);
  };

  //LINK PARA WHAT
  const crearLinkWhatsapp = (nombre, descripcion, imagenUrl, tallaSeleccionada) => {
    const mensaje = `¡Hola! Estoy interesado/a en el ${nombre}. \nDescripción: ${descripcion}. \nTalla: ${tallaSeleccionada}. \nPuedes ver la imagen aquí: ${imagenUrl}.`;
    const encodedMensaje = encodeURIComponent(mensaje);
    return `https://wa.me/+573227598775?text=${encodedMensaje}`;
  };

  //LINK PARA CARRITO
  const añadirAlCarrito = () => {
    if (!tallaSeleccionada) {
      alert("Por favor, selecciona una talla.");
      return;
    }
  
    const carrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
    const productoExistente = carrito.find(item => item.id === producto.id && item.talla === tallaSeleccionada);
  
    if (productoExistente) {
      productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
    } else {
      carrito.push({ ...producto, talla: tallaSeleccionada, cantidad: 1 });
    }
  
    localStorage.setItem('productosEnCarrito', JSON.stringify(carrito));
    navigate('/Cart');
  };
  

  return (
    <>
      <Navbar />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="/">Inicio</a> <span className="mx-2 mb-0">/</span>{" "}
              <a href="/tienda">Tienda</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Detalle del Producto</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              {producto && (
                <div className="block-4 text-center border">
                  <figure className="block-4-image">
                    <img
                      src={`http://localhost:5000/images/${producto.imagen}`}
                      alt={producto.nombre}
                      className="img-fluid"
                    />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3>{producto.nombre}</h3>
                    <p className="mb-0">{producto.descripcion}</p>
                    <p className="text-secondary font-weight-bold">
                      Precio: {producto.precio}
                    </p>
                    {producto.precioUSD && (
                      <p className="text-secondary font-weight-bold">
                        Precio USD: {producto.precioUSD}
                      </p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <div className="mb-1 d-flex">
                      <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                        <span className="d-inline-block mr-2">
                          <input
                            type="radio"
                            id="option-sm"
                            name="shop-sizes"
                            value="S"
                            checked={tallaSeleccionada === 'S'}
                            onChange={manejarCambioTalla}
                          />
                        </span>
                        <span className="d-inline-block text-black">S</span>
                      </label>
                      <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                        <span className="d-inline-block mr-2">
                          <input
                            type="radio"
                            id="option-md"
                            name="shop-sizes"
                            value="M"
                            checked={tallaSeleccionada === 'M'}
                            onChange={manejarCambioTalla}
                          />
                        </span>
                        <span className="d-inline-block text-black">M</span>
                      </label>
                      <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                        <span className="d-inline-block mr-2">
                          <input
                            type="radio"
                            id="option-lg"
                            name="shop-sizes"
                            value="L"
                            checked={tallaSeleccionada === 'L'}
                            onChange={manejarCambioTalla}
                          />
                        </span>
                        <span className="d-inline-block text-black">L</span>
                      </label>
                      <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                        <span className="d-inline-block mr-2">
                          <input
                            type="radio"
                            id="option-xl"
                            name="shop-sizes"
                            value="XL"
                            checked={tallaSeleccionada === 'XL'}
                            onChange={manejarCambioTalla}
                          />
                        </span>
                        <span className="d-inline-block text-black">XL</span>
                      </label>
                      <label htmlFor="option-U" className="d-flex mr-3 mb-3">
                        <span className="d-inline-block mr-2">
                          <input
                            type="radio"
                            id="option-U"
                            name="shop-sizes"
                            value="U"
                            checked={tallaSeleccionada === 'U'}
                            onChange={manejarCambioTalla}
                          />
                        </span>
                        <span className="d-inline-block text-black">U</span>
                      </label>
                    </div>
                    <a
                      href={crearLinkWhatsapp(producto.nombre, producto.descripcion, `http://localhost:5000/images/${producto.imagen}`, tallaSeleccionada)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp /> Comprar
                    </a>
                    <button onClick={añadirAlCarrito} className='banner-button'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Productos Destacados</h2>
              <div className="row">
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
                            alt={producto.nombre}
                            className="img-fluid"/>
                        </Link>
                      </figure>
                      <div className="block-4-text p-4">
                        <h3>
                          <Link to={`/shop/${producto.id}`}>{producto.nombre}</Link>
                        </h3>
                        <p className="mb-0">{producto.descripcion}</p>
                        <p className="text-secondary font-weight-bold">
                          Precio: {producto.precio}
                        </p>
                        {producto.precioUSD && (
                          <p className="text-secondary font-weight-bold">
                            Precio USD: {producto.precioUSD}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHome />
    </>
  );
};
