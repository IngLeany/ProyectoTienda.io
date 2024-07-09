// routes/productos.js
const express = require('express');
const router = express.Router();
const productos = require('../data/productos');
const Producto = require('../models/Producto');

// Obtener todos los productos
router.get('/', (req, res) => {
  res.json(productos);
});

// Obtener un producto por su id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

module.exports = router;
