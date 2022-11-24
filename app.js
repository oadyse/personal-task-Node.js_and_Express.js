const express = require('express');

const connect = require("./schemas");
connect();

const app = express();
const port = 3000;

app.use(express.json());

const goodsRouter = require("./routes/goods");
const cartRouter = require("./routes/carts");

app.use("/api", [goodsRouter, cartRouter]);

app.listen(port, () => {
  console.log(port, `Server is open with port ${port}!`);
});