import {FaSearch, FaFacebook, FaWhatsapp, FaInstagram, FaTiktok,} from "react-icons/fa";
import "./Navbar.css";
import logotythome from "../../assets/images/logotythome.png";
import {Outlet, Link} from "react-router-dom";

export const Navbar = () => {
 const [searchTerm, setSearchTerm] = useState('');
  const [filteredProductos, setFilteredProductos] = useState([]);

  const handleSearch = () => {
    axios.get(`http://localhost:3000/api/productos`, {
      params: {
        nombre: searchTerm
        // Para añadir otros parámetros como precioMin y precioMax si los necesitas
      }
    })
    .then(response => {
      console.log(response.data);
      setFilteredProducts(response.data); // Actualiza el estado con los productos filtrados
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  return (
    <>  
      <nav className="navbar">  
        <div className="container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <ul className="navbar-nav">
            <li className="nav-item dropdown-item">
            <a href="/" className="nav-link">
                Colecciones
              </a>      
              <ul className="dropdown">
                <h6>CLOTO</h6>
                <li>
                <Link to={`/`}>Mixtura Tropical</Link>
                </li>
                <li>
                <Link to={`/`}>Pascua</Link>
                </li>
                <li>
                <Link to={`/`}>Madre</Link>
                </li>
                <li>
                <Link to={`/`}>Cielo Tierra</Link>
                </li>
                <li>
                <Link to={`/`}>Amor y Admistad</Link>
                </li>
                <li>
                  <Link to={`/`}>Otoño</Link>
                </li>
                <li>
                <Link to={`/`}>Navidad</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown-item">
              <a href="/" className="nav-link">
                Categorias
              </a>
              <ul className="dropdown">
                <h6>CLOTO - River</h6>
                <li>
                <Link to={`/`}>Pijamas / Ropa de Descanso</Link>
                </li>
                <h6>IKA - Swimsuits</h6>
                <li>
                <Link to={`/`}>Vestidos de baño / Sandalias</Link>
                </li>
                <h6>HOME - Lenceria de casa</h6>
                <li>
                <Link to={`/`}>  Manteles / Caminos de mesa / Servilleteros / Delantales /
                    Coge ollas / Individuales / Bolso pícnic / bolsos playeros
                    /Cojines</Link>
                </li>
                <h6>REBECA</h6>
                <li>
                <Link to={`/`}>Ropa de lino</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/" class="nav-link">
              <img src={logotythome} alt="logo" className="logo" />
              </a>
            </li>
            <li className="nav-item">
            <Link to={`Historia`}>Historia</Link>   
            </li>
            <li className="nav-item">
            <Link to={`Blog`}>Blog</Link>     
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com/tythome.marca">
              <FaFacebook />
            </a>
            <a href="https://wa.me/+573227598775">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/_tythome_">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@tythomemarca">
              <FaTiktok />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
