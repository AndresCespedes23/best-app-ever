/* eslint-disable import/no-anonymous-default-export */
const usuarios = [
  {
    id: "1",
    nombre: "Norberto",
    apellido: "Napolitano",
    fechaNac: "10-03-1950",
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
        tipo_envio: "sucursal",
        estado_envio: "pendiente",
        rango_horario: "14:43:55",
        forma_pago: "efectivo",
        total: 27400,
      },
    ],
    contraseña: "goku123",
    mail: "pappo@gmail.com",
    telefono: 10303456,
    isActive: true,
  },
];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(usuarios));
};
