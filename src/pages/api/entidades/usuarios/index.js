/* eslint-disable import/no-anonymous-default-export */
const usuarios = [
  {
    id: "1",
    nombre: "Juan Jose",
    apellido: "Frijol",
    fechaNac: "03-09-1992",
    domicilio: {
      direccion: "Av. de las Camelias 1976",
      ciudad: "Rosario",
      provincia: "Santa Fe",
    },
    envios: [
      {
        id_envio: "8",
        fecha: "24-04-2023",
        items: [
          {
            id_producto: "123",
            nombre_producto: "Johnny Walker - Black Label",
            precio: 5000,
            cantidad: 5,
          },
          {
            id_producto: "123",
            nombre_producto: "Coca Cola",
            precio: 600,
            cantidad: 4,
          },
        ],
        tipo_envio: "",
        rango_horario: "",
        total: 27400,
      },
    ],
    contraseña: "goku123",
    mail: "juanjo@gmail.com",
    telefono: 10303456,
    isActive: true,
  },
];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(usuarios));
};
