import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { FooterHome } from '../../components/FooterHome/FooterHome';
import "./Checkout.css";

export const Checkout = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
    telefono: '',
    banco: '',
    numeroCuenta: '',
    confirmacionCuenta: '',
    pais: '', 
  });
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
    const productosValidos = productos.filter(producto => 
      producto.precio && typeof producto.precio === 'string'
    ).map(producto => ({
      ...producto,
      cantidad: producto.cantidad || 1  // Asegúrate de que la cantidad esté inicializada
    }));
    setProductosEnCarrito(productosValidos);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = 'Nombre es requerido';
    if (!formData.email) newErrors.email = 'Email es requerido';
    if (!formData.direccion) newErrors.direccion = 'Dirección es requerida';
    if (!formData.telefono) newErrors.telefono = 'Teléfono es requerido';
    if (!formData.numeroCuenta) newErrors.numeroCuenta = 'Número de cuenta es requerido';
    if (formData.numeroCuenta !== formData.confirmacionCuenta) newErrors.confirmacionCuenta = 'Las cuentas deben coincidir';
    if (!paymentMethod) newErrors.banco = 'Método de pago es requerido';
    if (!formData.pais) newErrors.pais = 'País es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/pedidos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            email: formData.email,
            direccion: formData.direccion,
            telefono: formData.telefono,
            banco: paymentMethod,
            numeroCuenta: formData.numeroCuenta,
            pais: formData.pais,
            productos: productosEnCarrito.map(producto => ({
              id: producto.id,
              nombre: producto.nombre,
              precio: producto.precio,
              cantidad: producto.cantidad
            })),
            montoTotal: calcularTotal()
          })
        });
        const data = await response.json();
        if (data.status === 'success') {
          // Redirige al usuario a la página de pago de PayU
          window.location.href = data.redirectUrl;
        } else {
          alert('Error al procesar el pago');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al procesar el pedido');
      }
    }
  };

  const calcularTotal = () => {
    return productosEnCarrito.reduce((total, producto) => {
      const precio = producto.precio ? parseFloat(producto.precio.toString().replace(/[^0-9.-]+/g, "")) : 0;
      const cantidad = Number(producto.cantidad) || 0;
      return total + (precio * cantidad);
    }, 0);
  };

  const eliminarProducto = (index) => {
    const productosActualizados = [...productosEnCarrito];
    productosActualizados.splice(index, 1);
    setProductosEnCarrito(productosActualizados);
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosActualizados));
  };

  const ajustarCantidad = (index, delta) => {
    const productosActualizados = [...productosEnCarrito];
    const producto = productosActualizados[index];
    const nuevaCantidad = Math.max(1, Number(producto.cantidad) + delta);
    producto.cantidad = nuevaCantidad;
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
              <strong className="text-black">Faturación</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="checkout-container">
                <h1>Facturación para envío</h1>
                <form method="post" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre completo*</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <p className="error">{errors.nombre}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Tu email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="pais">País*</label>
                    <select
                      id="pais"
                      name="pais"
                      className="form-control"
                      value={formData.pais}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione un país</option>
                      <option value="7">Colombia</option>
                      <option value="1">Paraguay</option>
                      <option value="2">Armenia</option>
                      <option value="3">Australia</option>
                      <option value="4">Bolivia</option>
                      <option value="5">Brasil</option>
                      <option value="6">Canadá</option>      
                      <option value="8">República Dominicana</option>
                      <option value="9">Argentina</option>
                    </select>
                    {errors.pais && <p className="error">{errors.pais}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="direccion">Dirección*</label>
                    <input
                      type="text"
                      id="direccion"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      placeholder="Tu dirección"
                    />
                    {errors.direccion && <p className="error">{errors.direccion}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono*</label>
                    <input
                      type="text"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Tu teléfono"
                    />
                    {errors.telefono && <p className="error">{errors.telefono}</p>}
                  </div>

                  <div className="form-group">
                    <label>Método de pago*</label>
                    <div>
                      <input
                        type="radio" id="bancolombia" name="banco" value="Bancolombia" onChange={handlePaymentMethodChange} />
                      <label htmlFor="bancolombia">Bancolombia</label>
                    </div>
                    <div>
                      <input
                        type="radio" id="nequi" name="banco" value="Nequi" onChange={handlePaymentMethodChange} />
                      <label htmlFor="nequi">Nequi</label>
                    </div>
                    {errors.banco && <p className="error">{errors.banco}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="numeroCuenta">Número de cuenta*</label>
                    <input
                      type="text"
                      id="numeroCuenta"
                      name="numeroCuenta"
                      value={formData.numeroCuenta}
                      onChange={handleChange}
                      placeholder="Número de cuenta"
                    />
                    {errors.numeroCuenta && <p className="error">{errors.numeroCuenta}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmacionCuenta">Confirmar número de cuenta</label>
                    <input
                      type="text"
                      id="confirmacionCuenta"
                      name="confirmacionCuenta"
                      value={formData.confirmacionCuenta}
                      onChange={handleChange}
                      placeholder="Confirmar número de cuenta"
                    />
                    {errors.confirmacionCuenta && <p className="error">{errors.confirmacionCuenta}</p>}
                  </div>

                  <button type="submit" className="btn btn-primary">Pagar Ahora</button>
                </form>
              </div>
            </div>

            <div className="col-md-4">
              <div className="site-blocks-table">
                <table className="table table-bordered">
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
                          <td className="product-size">{producto.talla}</td> {/* Muestra la talla */}
                          <td>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={() => ajustarCantidad(index, -1)}>&minus;</button>
                              </div>
                              <input type="text" className="form-control text-center" value={Number(producto.cantidad) || 1} readOnly />
                              <div className="input-group-append">
                                <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={() => ajustarCantidad(index, 1)}>+</button>
                              </div>
                            </div>
                          </td>
                          <td>{(parseFloat(producto.precio) * producto.cantidad).toFixed(2)}</td>
                          <td>
                            <button className="btn btn-secondary btn-sm" onClick={() => eliminarProducto(index)}>X</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <h3>Sub total del pedido {calcularTotal().toFixed(2)}</h3>
              <h3>Total {calcularTotal().toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
      <FooterHome />
    </>
  );
};
