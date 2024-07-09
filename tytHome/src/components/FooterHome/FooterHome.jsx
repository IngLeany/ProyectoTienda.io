import React from 'react'
import "./FooterHome.css"

export const FooterHome = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <h2>T.T HOME</h2>
      </div>
      <div className="footer-info">
        <p>Horario de atención: Lunes a Viernes, 9am - 6pm</p>
        <p>Horario de atención: Sábados, 10am - 7pm</p>
        <p>Dirección: Carulla Pance, Ciudad Colombia</p>
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
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Colecciones</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4">
          <ul className="list-unstyled">
            <li><a href="#">Términos</a></li>
            <li><a href="#">comprar</a></li>
            <li><a href="#">Mamá</a></li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4">
          <ul className="list-unstyled">
            <li><a href="#">Amor & amistad</a></li>
            <li><a href="#">Halloween</a></li>
            <li><a href="#">Otoño</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
