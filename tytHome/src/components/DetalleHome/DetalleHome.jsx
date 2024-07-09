import React from 'react'
import "./DetalleHome.css"
import banner from '../../assets/images/banner.png'; 
import { Outlet } from 'react-router-dom';

export const DetalleHome = () => {
  return (
    <div className="banner">
      <div className="texto">
        <h1>Marca Ecológica / Orgánica</h1>
      </div>
   <img src={banner} alt="logo" style={{ width: '100%' }} />
    <div className="banner-text">
    <a href="/Tienda" className="banner-button">Tienda</a>
    </div>
    <Outlet></Outlet>
  </div>
  )
}
