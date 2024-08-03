import { createBrowserRouter } from 'react-router-dom';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { DetalleHome } from '../components/DetalleHome/DetalleHome';
import { Historia } from '../pages/Historia/Historia';
import { Tienda } from "../pages/Tienda/Tienda";
import { Blog } from "../pages/Blog/Blog";
import { ShopSingle } from "../pages/ShopSingle/ShopSingle";
import { Coleccion } from "../pages/Coleccion/Coleccion";
import { Categoria } from "../pages/Categoria/Categoria";
import { SearchResults } from '../components/SearchResults/SearchResults';

export const RouterApp = createBrowserRouter([
  {
    path: "/",
    element: 
    <Layout>
      <DetalleHome/>
    </Layout>,
  },

  {
    path: "historia",
    element: <Historia/>,
  },
 

{
  path: "blog",
  element: <Blog/>
},


{
 path: "tienda",
 element: <Tienda/>
},

{
  path: "detalleHome",
  element: <DetalleHome/>
 },

 {
  path: "/shop/:id",
  element: <ShopSingle/>
 },
 

{
  path: "/coleccion/:nombre", 
  element: <Coleccion/>
},
{
path: "/categoria/:nombre",
element: <Categoria/>
},
{
path: "/search",
element: <SearchResults/>
},

]);
