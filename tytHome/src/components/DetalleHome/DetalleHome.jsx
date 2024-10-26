import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./DetalleHome.css";
import banner from '../../assets/images/banner.png'; 
import { Outlet } from 'react-router-dom';

export const DetalleHome = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/suscripciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('¡Te has suscrito exitosamente!');
        setEmail('');
      } else {
        setMessage(data.message || 'Hubo un error al suscribirse.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Hubo un error al suscribirse.');
    }
  };


  return (
    <div className="banner">
      <div className="texto">
        <h1>Estilo con Tendencias Ecológicas</h1>
      </div>
      <img src={banner} alt="logo" style={{ width: '100%' }} />
      <div className="banner-text">
        <Link to={`/Tienda`} className='banner-button'>Compra-Ecológico</Link>
      </div>
      
      {/* Sección de Suscripción */}
      <div className="subscription-section">
        <h2>Suscríbete y recibe nuestras novedades</h2>
        <form onSubmit={handleSubmit} className="subscription-form">
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Suscribirse</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      
      <Outlet />
    </div>
  );
};
