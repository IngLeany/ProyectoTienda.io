import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok, FaShoppingCart } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import logotythome from "../../assets/images/logotythome.png";
import { Link } from "react-router-dom";

export const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };


  return (
    <>
      <nav className="navbar">
        <div className="container">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
               <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item dropdown-item">
              <a href="/" className="nav-link">
                Colecciones
              </a>
              <ul className="dropdown">
                <h6>CLOTO</h6>
                <li><Link to="/coleccion/Mixtura%20Tropical">Mixtura Tropical</Link></li>
                <li><Link to="/coleccion/Mil%20Colores">Mil Colores</Link></li>
                <li><Link to="/coleccion/Madre">Madre </Link></li>
                <li><Link to="/coleccion/Cielo%20Tierra">Cielo Tierra</Link></li>
                <li><Link to="/coleccion/Amor%20y%20Amistad">Amor y Amistad</Link></li>
                <li><Link to="/coleccion/Otoño">Otoño</Link>
                </li>
                <li><Link to="/coleccion/Navidad">Navidad</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown-item">
              <a href="/" className="nav-link">
                Categorias
              </a>
              <ul className="dropdown">
                <h6>CLOTO - River</h6>
                <li><Link to={`/categoria/${encodeURIComponent("Pijamas / Ropa de Descanso")}`}>Pijamas / Ropa de Descanso</Link>
                </li><h6>IKA - Swimsuits</h6><li>
                  <Link to={`/categoria/${encodeURIComponent("Vestidos de baño / Sandalias")}`}>Vestidos de baño / Sandalias</Link>
                </li>
                <h6>HOME - Lenceria de hogar</h6>
                <li><Link to={`/categoria/${encodeURIComponent("Lencería de Hogar")}`}>
                    Manteles / Caminos de mesa / Servilleteros / Delantales / Coge ollas / Individuales / Bolso pícnic / bolsos playeros /Cojines </Link></li>
                <h6>REBECA</h6>
                <li><Link to={`/categoria/${encodeURIComponent("Ropa de lino")}`}>Ropa de lino</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/" class="nav-link">
                <img src={logotythome} alt="logo" className="logo" />
              </a>
            </li>
            <li className="nav-item"><Link to={`/Historia`}>Historia</Link></li>
            <li className="nav-item"><Link to={`/Blog`}>Blog</Link></li>
          </ul>
          <div className="social-icons">
            <a href="/Cart"><FaShoppingCart /></a>
            <a href="https://wa.me/+573227598775"><FaWhatsapp /></a>
            <a href="https://instagram.com/_tythome_"><FaInstagram /></a>
            <a href="https://www.facebook.com/tythome.marca"><FaFacebook /></a>
            <a href="https://tiktok.com/@tythomemarca"><FaTiktok /></a>
          </div>
        </div>
      </nav>
    </>
  );
};
