const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const productos = [
  {
    id: 1,
    name: "Vestido de baño 1",
    price: 98.9,
    image: "",
    tallas: ["S", "M", "L", "XL"],
    categoria: "IKA - Swimsuits",
  },

  {
    id: 2,
    name: "Vestido de baño 2",
    price: 119.7,
    image: "",
    tallas: ["S", "M", "L", "XL"],
    categoria: "IKA - Swimsuits",
  },
  {
    id: 3,
    name: "Vestido de baño 3",
    price: 98.5,
    image: "",
    tallas: ["S", "M", "L", "XL"],
    categoria: "IKA - Swimsuits",
  },
  {
    id: 4,
    name: "vestido de baño 4",
    price: 98.9,
    image: "",
    tallas: ["S", "M", "L", "XL"],
    categoria: "IKA - Swimsuits",
  },
  { id: 5, 
    name: "Pareo 5",
    price: 185.9, 
    image: "",
    categoria: "IKA - Swimsuits",
     },
  {
    id: 6,
    name: "Vestido de baño 6",
    price: 98.5,
    Image: "",
    tallas: ["S", "M", "L", "XL"],
    categoria: "IKA - Swimsuits",
  },
];

app.use(cors());

app.get("/api/productos", (req, res) => {
  const { nombre, precioMin, precioMax } = req.query;

  // Aplicar filtros según los parámetros recibidos
  let productosFiltrados = productos;

  if (nombre) {
    productosFiltrados = productosFiltrados.filter(
      producto => producto.name.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  if (precioMin) {
    productosFiltrados = productosFiltrados.filter(
      producto => producto.price >= parseFloat(precioMin)
    );
  }

  if (precioMax) {
    productosFiltrados = productosFiltrados.filter(
      producto => producto.price <= parseFloat(precioMax)
    );
  }

  res.json(productosFiltrados);
});

app.use("/", express.static("tytHome"));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

