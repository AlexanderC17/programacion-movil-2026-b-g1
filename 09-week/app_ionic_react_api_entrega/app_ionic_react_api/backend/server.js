const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: 'Wireless Keyboard',
    price: 120000,
    description: 'Compact Bluetooth keyboard for everyday use.'
  },
  {
    id: 2,
    name: 'USB-C Headphones',
    price: 95000,
    description: 'Wired headphones with USB-C connection.'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 85000,
    description: 'Adjustable stand for a comfortable workspace.'
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

app.post('/api/products', (req, res) => {
  const { name, price, description } = req.body;

  if (!name || price === undefined || price === '') {
    return res.status(400).json({
      message: 'Name and price are required'
    });
  }

  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice) || numericPrice < 0) {
    return res.status(400).json({
      message: 'Price must be a valid non-negative number'
    });
  }

  const newProduct = {
    id: products.length ? Math.max(...products.map((item) => item.id)) + 1 : 1,
    name: String(name).trim(),
    price: numericPrice,
    description: description ? String(description).trim() : ''
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
