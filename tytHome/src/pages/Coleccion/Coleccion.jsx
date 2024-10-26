import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import {FooterHome } from '../../components/FooterHome/FooterHome';
import "./Coleccion.css";

export const Coleccion = () => {
  const { nombre } = useParams(); // Recupera el parámetro de la coleccion desde la URL
  const [productosColeccion, setProductosColeccion] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/productos/coleccion/${encodeURIComponent(nombre)}`);
        const data = await response.json();
        
        // Asegúrate de que la respuesta sea un array
        if (Array.isArray(data)) {
          setProductosColeccion(data);
        } else {
          throw new Error('Datos inesperados de la API');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProductos();
  }, [nombre]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="coleccion-container">
      <h1>{nombre}</h1>
      <div className="productos-grid">
        {productosColeccion.length > 0 ? (
          productosColeccion.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={`http://localhost:5000/images/${producto.imagen}`} alt={producto.nombre} />
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <p className="text-secondary font-weight-bold">
                      Precio {producto.precio}</p>
                    {producto.precioUSD && (
                      <p className="text-secondary font-weight-bold">
                        Precio USD {producto.precioUSD}</p>
                    )}
              
              <Link to={`/Tienda`}>Ver más</Link>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles en esta coleccion.</p>
        )}
      </div>
    </div>
    <FooterHome/>
    </>
  );
};

