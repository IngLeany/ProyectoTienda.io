import { FooterHome } from "../../components/FooterHome/FooterHome";
import videohistoria from "../../assets/videos/videohistoria.mp4";
import { Navbar } from "../../components/Navbar/Navbar";
import './Historia.css'


export const Historia = () => {
  return (
    <>
      <Navbar />

      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="/">Inicio</a> <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Historia</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section border-bottom" data-aos="fade">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2 className="text-black">PROCESO DE PARA LOGRAR LAS PRENDAS DE NUESTRA TIENDA</h2>
                <video autoPlay controls>
                  <source src={videohistoria} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterHome />
    </>
  );
};

