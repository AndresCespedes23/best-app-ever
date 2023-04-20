/* eslint-disable import/no-anonymous-default-export */
const usuarios = [
  {
    id: "1",
    nombre: "Juan Jose",
    apellido: "Frijol",
    fechaNac: "03/10/1993",
    direccion: "Av. de las Camelias 1976",
    ciudad: "Rosario",
    provincia: "Santa Fe",
    contraseña: "123456789",
    mail: "juanjo@gmail.com",
    telefono: "123456789",
    tipo: "",
    isActive: true,
  },
  {
    id: "2",
    nombre: "Juan Carlos",
    apellido: "Frijol",
    fechaNac: "03/10/1993",
    direccion: "Av. de las Camelias 1992",
    ciudad: "Rosario",
    provincia: "Santa Fe",
    contraseña: "123456789",
    mail: "juancar@gmail.com",
    telefono: "123456789",
    tipo: "",
    isActive: true,
  },
  {
    id: "3",
    nombre: "Facundo",
    apellido: "Frijol",
    fechaNac: "03/10/1993",
    direccion: "Av. de las Camelias 1986",
    ciudad: "Rosario",
    provincia: "Santa Fe",
    contraseña: "123456789",
    mail: "facuca@gmail.com",
    telefono: "123456789",
    tipo: "",
    isActive: true,
  },
];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(usuarios));
};
