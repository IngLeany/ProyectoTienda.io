import { React } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { FooterHome } from '../../components';
import "./TrankYou.css";

export const TrankYou = () => {
    return (
        <>
            <Navbar />
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0">
                            <a href="/Tienda">Inicio</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Compra éxitosa</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <span className="icon-check_circle display-3 text-success"></span>
                            <h3 className="display-3 text-black">¡Gracias, haces parte del cambio sostenible con nuestro planeta!</h3>
                            <p className="lead mb-5">Su pedido se completó con éxito.</p>
                            <p><a href="/Tienda" className="btn btn-sm btn-warning">VOLVER A LA TIENDA</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterHome />
        </>
    )
}
