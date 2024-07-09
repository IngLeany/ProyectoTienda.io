import React from 'react';
import './ShopSingle.css'; 

export const ShopSingle = ({ producto }) => {

    const generarLinkWhatsapp = () => {
        
        const numeroWhatsApp = '+573227599775'; 
      
        const mensaje = `Hola, estoy interesado en comprar el producto ${producto.nombre}`;
        return `https://wa.me/${3227599775}?text=${encodeURIComponent(mensaje)}`;
      };

  return (
    <div className="site-wrap">
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0"><a href="">Inicio</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">{producto.nombre}</strong></div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={producto.imagen} alt="Imagen del producto" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{producto.nombre}</h2>
              
              <p><strong className="text-primary h4">Precio: ${producto.precio}</strong></p>
              <div className="mb-1 d-flex">
                {producto.tallas.map(talla => (
                  <label key={talla} className="d-flex mr-3 mb-3">
                    <span className="d-inline-block mr-2" style={{ top: '-2px', position: 'relative' }}>
                      <input type="radio" id={`option-${talla}`} name="shop-sizes" />
                    </span>
                    <span className="d-inline-block text-black">{talla}</span>
                  </label>
                ))}
              </div>
              <div className="mb-5">
                <div className="input-group mb-3" style={{ maxWidth: '120px' }}>
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                  </div>
                  <input type="text" className="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
                  </div>
                </div>
              </div>
              <p><a href={generarLinkWhatsapp()} className="buy-now btn btn-sm btn-warning">Comprar</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


