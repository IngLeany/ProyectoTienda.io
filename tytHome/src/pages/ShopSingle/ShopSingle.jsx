import React from "react";
import "./ShopSingle.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { FooterHome } from "../../components/FooterHome/FooterHome";

export const ShopSingle = () => {

  
  return (
    <>
      <Navbar />
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="/Tienda">Tienda</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">Shop-Single</strong>
            </div>
          </div>
        </div>
      </div>



      <FooterHome />
    </>
  );
};



