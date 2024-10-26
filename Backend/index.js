const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'home'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Middleware para servir archivos estáticos (imágenes)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Ruta de la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de productos');
});

// productos
app.get('/api/productos', (req, res) => {
  const sql = 'SELECT * FROM productos';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// productos id para shopSingle
app.get('/api/productos/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM productos WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  });
});

// Obtener productos por categoría
app.get('/api/productos/categoria/:nombre', (req, res) => {
  const { nombre } = req.params;
  const sql = 'SELECT * FROM productos WHERE categoria_id = (SELECT id FROM categorias WHERE nombre = ?)';
  db.query(sql, [nombre], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Obtener productos por colecciones
app.get('/api/productos/coleccion/:nombre', (req, res) => {
  const { nombre } = req.params;
  const sql = 'SELECT * FROM productos WHERE coleccion_id = (SELECT id FROM colecciones WHERE nombre = ?)';
  db.query(sql, [nombre], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Ruta para agregar una suscripción
app.post('/api/suscripciones', (req, res) => {
  const { email } = req.body;
  
  console.log('Datos recibidos:', req.body);  // Mensaje de depuración

  if (!email) {
    return res.status(400).json({ message: 'El correo electrónico es obligatorio' });
  }

  const sql = 'INSERT INTO suscripciones (email) VALUES (?)';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error al agregar la suscripción:', err);
      return res.status(500).json({ message: 'Error al agregar la suscripción' });
    }
    console.log('Suscripción agregada:', results);  // Mensaje de depuración
    res.status(201).json({ message: 'Suscripción agregada con éxito' });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
