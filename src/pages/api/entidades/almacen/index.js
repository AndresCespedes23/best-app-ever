/* eslint-disable import/no-anonymous-default-export */
const almacen = [
  {
    id: "1",
    calle: "",
    SKU: "56464565",
    cantidad: {
      stock: 700,
      productos: [
        {
          nombre: "carnes",
          items: [
            {
              id_producto: "4554764",
              nombre: "vacio",
              precio: 500,
              cantidad: 4,
            },
            {
              id_producto: "73167543",
              nombre: "ozobuco",
              precio: 453,
              cantidad: 4,
            },
          ],
        },
        {
          nombre: "bebidas alcoholicas",
          subcategorias: [
            {
              nombre: "cerveza",
              items: [
                {
                  id_producto: "482662",
                  nombre: "Stella Artois",
                  precio: 300,
                  cantidad: 5,
                },
                {
                  id_producto: "769678",
                  nombre: "Heineken",
                  precio: 400,
                  cantidad: 5,
                },
              ],
            },
            {
              nombre: "vinos",
              items: [
                {
                  id_producto: "345474",
                  nombre: "Rutini",
                  precio: 500,
                  cantidad: 7,
                },
                {
                  id_producto: "945684",
                  nombre: "Malbec",
                  precio: 700,
                  cantidad: 9,
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(almacen));
};
