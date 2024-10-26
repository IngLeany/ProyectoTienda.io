import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar } from '../../components/Navbar/Navbar';
import { FooterHome } from '../../components/FooterHome/FooterHome';
import "./Cart.css";

export const Cart = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
    const productosValidos = productos.filter(producto =>
      producto.precio && typeof producto.precio === 'string'
    );

    setProductosEnCarrito(productosValidos);
  }, []);

  // Calcula el precio total
  const calcularTotal = () => {
    return productosEnCarrito.reduce((total, producto) => {
      const precio = parseFloat(producto.precio.toString().replace(/[^0-9.-]+/g, "")) || 0;
      return total + (precio * (producto.cantidad || 1));
    }, 0);
  };
  

  const ajustarCantidad = (index, delta) => {
    const productosActualizados = [...productosEnCarrito];
    const producto = productosActualizados[index];
    const nuevaCantidad = Math.max(1, (producto.cantidad || 1) + delta);
    producto.cantidad = nuevaCantidad;
    setProductosEnCarrito(productosActualizados);
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosActualizados));
  };
  

  const eliminarProducto = (index) => {
    const productosActualizados = [...productosEnCarrito];
    productosActualizados.splice(index, 1);
    setProductosEnCarrito(productosActualizados);
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosActualizados));
  };

  return (
    <>
      <Navbar />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="/Tienda">Seguir comprando</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Tu Carrito</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table table-bordered">
                  {/*<thead>
                    <tr>
                      <th className="product-thumbnail">Imagen</th>
                      <th className="product-name">Nombre</th>
                      <th className="product-size">Talla</th>
                      <th className="product-quantity">Cantidad</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Eliminar</th>
                    </tr>
                  </thead>*/}
                  <tbody>
                    {productosEnCarrito.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center">Tu carrito está vacío</td>
                      </tr>
                    ) : (
                      productosEnCarrito.map((producto, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <img src={`http://localhost:5000/images/${producto.imagen}`} alt={producto.nombre} className="img-fluid" />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{producto.nombre}</h2>
                          </td>
                          <td>{producto.precio}</td>
                          <td className="product-size">{producto.talla}</td> {/* MUstra la talla */}
                          <td>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <button
                                  className="btn btn-outline-primary js-btn-minus"
                                  type="button"
                                  onClick={() => ajustarCantidad(index, -1)}  >
                                  &minus; </button>
                              </div>
                              <input
                                type="text"
                                className="form-control text-center"
                                value={Number(producto.cantidad) || 1}
                                readOnly  />
                             <div className="input-group-append">
                                <button
                                  className="btn btn-outline-primary js-btn-plus"
                                  type="button"
                                  onClick={() => ajustarCantidad(index, 1)} > + </button>
                              </div>
                            </div>
                          </td>
                          <td>{(parseFloat(producto.precio) * producto.cantidad).toFixed(2)}</td>
                          <td>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => eliminarProducto(index)} > X</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {productosEnCarrito.length > 0 && (
                <div className="row">
                  <div className="col-md-12 text-right">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row mb-5">
                          <div className="col-md-6">
                            <button className="btn btn-outline-secondary btn-sm btn-block" onClick={() => { /*  */ }}></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-black h4 text-uppercase">RESUMEN DEL CARRITO</h3>
                    <h3>Sub Total del pedido {calcularTotal().toFixed(2)}</h3>
                    <h3>Total {calcularTotal().toFixed(2)}</h3>
                    <Link to={`/Checkout`} className='banner-button'>PAGAR AHORA</Link>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <FooterHome />
    </>
  );
};
