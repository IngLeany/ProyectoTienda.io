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
                <h2 className="text-black">NUESTRA HISTORIA</h2>
                <video autoPlay controls>
                  <source src={videohistoria} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section border-bottom" data-aos="fade">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>NUESTRAS MARCAS</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                   
                      <h3 className="block-38-heading h4">MARCA</h3>
                      <p className="block-38-subheading">CLOTO</p>
                    </div>
                    <div className="block-38-body">
                      <p>En nuestra marca de cloto encontrarás la línea de pijamas y ropa de descanso.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                     
                      <h3 className="block-38-heading h4">MARCA</h3>
                      <p className="block-38-subheading">IKA</p>
                    </div>
                    <div className="block-38-body">
                      <p>En nuestra marca IKA encontrarás la línea de vestidos de baño, lencería para el hogar, sandalias y mucho más.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                  
                      <h3 className="block-38-heading h4">MARCA</h3>
                      <p className="block-38-subheading">REBECA</p>
                    </div>
                    <div className="block-38-body">
                      <p>En nuestra marca Rebeca encontrarás ropa de lino y mucho más.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                     
                      <h3 className="block-38-heading h4">TYT</h3>
                      <p className="block-38-subheading">HOME</p>
                    </div>
                    <div className="block-38-body">
                      <p>Conoce nuestra marca de productos 100% orgánicos & ecológicos...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterHome />
    </>
  );
};

