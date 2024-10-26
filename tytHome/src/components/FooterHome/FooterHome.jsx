import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./FooterHome.css"

export const FooterHome = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <h2>T&T HOME</h2>
      </div>
      <div className="footer-info">
        <p>Horario de atención: Lunes a Viernes, 9am - 6pm</p>
        <p>Horario de atención: Sábados, 10am - 7pm</p>
        <p>Ubicación: Carrera 122 #18-35 Carulla Pance, Cali Colombia</p>
        <p>Teléfono: (+57) 322-7598775</p>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="footer-links">
        <div className="col-md-6 col-lg-4">
          <ul className="list-unstyled">
          <li><a href="">Nuestro Historia</a></li>
          <Link to={`/Historia`}>Historia</Link>
            <li><a href="">Nuestro blog</a></li>
            <Link to={`/Blog`}>Blog</Link>
            <li><a href="">Encuentra nuestras tendencias ecologica</a></li>
            <Link to={`/Tienda`}>Tienda</Link>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4">
          <ul className="list-unstyled">
            <li><a href="#">NUESTRAS MARCAS</a></li>
            <li><a href="#">Cloto</a></li>
            <li><a href="#">IKA</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4">
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Rebeca</a></li>
            <li><a href="#">Terminos y condiciones</a></li>
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  </footer>
  
  )
}
