import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import { useLocation } from "react-router-dom";
import {Link } from "react-router-dom"
import "./SearchResults.css";

export const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/productos');
        if (!response.ok) throw new Error('Network response was not ok');
        const productos = await response.json();

        // Filtra productos que coinciden con la consulta
        const filteredResults = productos.filter((producto) => {
          const lowerCaseQuery = query.toLowerCase();
          return (
            producto.nombre.toLowerCase().includes(lowerCaseQuery) ||
            (producto.descripcion && producto.descripcion.toLowerCase().includes(lowerCaseQuery)) ||
            producto.precio.toLowerCase().includes(lowerCaseQuery) ||
            producto.precioUSD.toLowerCase().includes(lowerCaseQuery)
          );
        });
        setResults(filteredResults);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

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
        <h2>{query}</h2>
        <div className="results-list">
          {results.length > 0 ? (
            results.map((producto) => (
              <div key={producto.id} className="result-item">   
                <img src={`http://localhost:5000/images/${producto.imagen}`} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <p>{producto.precioUSD}</p>
                <Link to={`/Tienda`}>Ver más</Link>
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
