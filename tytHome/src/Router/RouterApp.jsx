import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { DetalleHome } from '../components/DetalleHome/DetalleHome';
import { Historia } from '../pages/Historia/Historia';
import {Tienda } from '../pages/Tienda/Tienda';
import { Tienda } from "../pages/Tienda/Tienda";
import { Blog } from "../pages/Blog/Blog";

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
  path: "tienda",
  element: <Tienda/>,
},
{
  path: "blog",
  element: <Blog/>
},


]);
