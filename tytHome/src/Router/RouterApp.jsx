import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { DetalleHome } from '../components/DetalleHome/DetalleHome';
import { Historia } from '../pages/Historia/Historia';
import { Tienda } from "../pages/Tienda/Tienda";
import { Blog } from "../pages/Blog/Blog";
import { ShopSingle } from "../pages/ShopSingle/ShopSingle";

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
  path: "shopSingle",
  element: <ShopSingle/>
 },

]);
