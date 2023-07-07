// const express = require("express");
// const bodyParser = require("body-parser");
// //const cors = require("cors");

// const app = express();
// const port = 4000;

// //app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// let products = [
//   { id: 1, title: "joke 1" },
//   { id: 2, title: "joke2" },
//   { id: 3, title: "joke3" },
// ];

// app.get("/products", (req, res) => {
//   res.json(products);
// });

// app.get("/products/:id", (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const product = products.find((product) => product.id === id);

//     if (!product) {
//       throw new Error("Product not found");
//     }

//     res.json(product);
//   } catch (e) {
//     res.status(404).json({ message: e.message });
//   }
// });

// //   for (let p of products) {
// //   if (product.id == id) {
// //   res.json(product);
// //   return;
// //   }
// //    }
// //   res.status(404).send("Product not found");
// // }

// //app.listen(port, () =>
// // console.log("Local Web Service listenong on port${port}!")

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;

//app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

let products = [
  { id: 1, title: "joke 1" },
  { id: 2, title: "joke 2" },
  { id: 3, title: "joke 3" },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = products.find((product) => product.id === id);

    if (!product) {
      throw new Error("Product not found");
    }

    res.json(product);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
