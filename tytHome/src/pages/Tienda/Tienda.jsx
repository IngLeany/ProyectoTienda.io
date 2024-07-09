import React, { useState, useEffect } from 'react';
import './Tienda.css';

export const Tienda = () => {
    
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/productos');
        if (response.ok) {
          const data = await response.json();
          setProductos(data);
        } else {
          throw new Error('Error al obtener los productos');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductos();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="tienda-container">
      <h1 className="tienda-title">Tienda</h1>
      <div className="productos">
        {currentProducts.map(producto => (
          <div key={producto.id} className="producto">
            <img className="producto-imagen" src={producto.imagen} alt={producto.nombre} />
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p className="producto-precio">Precio: ${producto.precio}</p>
            {producto.tallas && (
              <div className="producto-tallas">
                <label className="producto-tallas-label">Tallas:</label>
                <select className="producto-tallas-select">
                  {producto.tallas.map(talla => (
                    <option key={talla} value={talla}>{talla}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(productos.length / productsPerPage) }, (_, i) => (
          <button key={i+1} className="page-button" onClick={() => paginate(i+1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

