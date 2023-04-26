/* eslint-disable import/no-anonymous-default-export */
const promo = [
  {
    id: "6456546",
    sku: "4635656",
    descripcion: "50% de descuento en chocolates Milka",
    cantidad: 74,
    qr: "https://assets.website-files.com/60b36baccb70892ffa4ca8d5/60b36baccb708974ed4caa92_the-office-steve-carell.jpeg",
  },
];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(promo));
};
