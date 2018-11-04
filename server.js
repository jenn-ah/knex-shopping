
require('dotenv').config(); //looks for .env file and grabs anything that it sets
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);


app.get('/', (req, res) => {
  res.send('smoke test');
})

app.listen(PORT, () => {
  process.stdout.write(`Server listening on port: ${PORT}`);
});