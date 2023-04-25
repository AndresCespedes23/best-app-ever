/* eslint-disable import/no-anonymous-default-export */
const promo = [{}];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(promo));
};
