import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";
import "./Blog.css";
import imagenes from "../../Barrel/Barrel";


export const Blog = () => {
  return (
    <>
      <Navbar />

      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="/">Inicio</a>
                <span className="mx-2 mb-0">/</span>
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
                  
                    <div className="col-md-5">
                      <div className="site-section-heading pt-3 mb-4">
                        <h2 className="text-black">BLOG</h2>
                      </div>
                      <p>
                        Somos una tienda de productos elaborados con materias
                        primas ecológicas y orgánicas, mediante procesos
                        sostenibles.
                      </p>
                      <p>TRABAJAMOS BAJO 4 PILARES</p>
                      <p>1. Sostenibilidad social.</p>
                      <p>2. Productos realizados de mujer a mujer.</p>
                      <p>3. Sostenibilidad medioambiental.</p>
                      <p>4. Somos un estilo de vida.</p>
                    </div>
                    <h1>IKA</h1>
                    <img
                      src={imagenes.fotoS}
                      alt="Image placeholder"
                      className="mb-4"
                      
                    />
                    <h1>CLOTO - REBECA</h1>
                    <p></p>
                       <img
                      src={imagenes.fotoP}
                      alt="Image placeholder"
                      className="mb-4"
                      
                    />
            
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
