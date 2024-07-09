import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import "./Blog.css";
import fachadatienda from "../../assets/images/fachadatienda.jpg";
import cloto from "../../assets/images/cloto.png";
import ika from "../../assets/images/ika.png";
import rebeca from "../../assets/images/rebeca.png";
import tythome from "../../assets/images/tythome.png";

const Blog = () => {
  return (
    <>
      <Navbar />

      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="">Inicio</a>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Blog</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section border-bottom" data-aos="fade">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6">
                <div className="block-16">
                  <figure>
                    <img
                      src={fachadatienda}
                      alt="Image placeholder"
                      className="img-fluid rounded"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <div className="site-section-heading pt-3 mb-4">
                  <h2 className="text-black">BLOG</h2>
                </div>
                <p>
                  Somos una tienda de productos elaborados con materias primas
                  ecológicas y orgánicas, mediante procesos sostenibles.
                </p>
                <p>TRABAJAMOS BAJO 4 PILARES</p>
                <p>Sostenibilidad social.</p>
                <p>Productos realizados de mujer a mujer.</p>
                <p>Sostenibilidad medioambiental.</p>
                <p>Somos un estilo de vida.</p>
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
                      <img src={cloto} alt="Image placeholder" className="mb-4" />
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
                      <img src={ika} alt="Image placeholder" className="mb-4" />
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
                      <img src={rebeca} alt="Image placeholder" className="mb-4" />
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
                      <img src={tythome} alt="Image placeholder" className="mb-4" />
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

export default Blog;
