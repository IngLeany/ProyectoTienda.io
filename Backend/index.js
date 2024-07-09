const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; 


app.use(cors());


app.get('Tienda/productos', (req, res) => {
  res.json(productos);
});

app.get('Tienda/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
