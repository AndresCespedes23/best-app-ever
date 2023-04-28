/* eslint-disable import/no-anonymous-default-export */
const usuarios = [
  {
    id: "1",
    nombre: "Armando Esteban",
    apellido: "Quito",
    fechaNac: "9-11-2011",
    domicilio: {
      direccion: "Av. de las Camelias 1976",
      ciudad: "Rosario",
      provincia: "Santa Fe",
    },
    envios: [
      {
        id_envio: "11",
        fecha: "24-04-2023",
        items: [
          {
            id_producto: "124",
            nombre_producto: "Johnny Walker - Black Label",
            precio: 5000,
            cantidad: 5,
          },
          {
            id_producto: "125",
            nombre_producto: "Coca Cola",
            precio: 600,
            cantidad: 4,
          },
        ],
        tipo_envio: "sucursal",
        estado_envio: "despachado",
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
  {
    id: "2",
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
        id_envio: "12",
        fecha: "24-04-2023",
        items: [
          {
            id_producto: "126",
            nombre_producto: "Johnny Walker - Black Label",
            precio: 5000,
            cantidad: 5,
          },
          {
            id_producto: "127",
            nombre_producto: "Coca Cola",
            precio: 600,
            cantidad: 4,
          },
        ],
        tipo_envio: "sucursal",
        estado_envio: "en camino",
        rango_horario: "14:43:55",
        forma_pago: "efectivo",
        total: 27400,
      },
    ],
    contraseña: "goku123",
    mail: "estiquito@gmail.com",
    telefono: 10303456,
    isActive: true,
  },
  {
    id: "3",
    nombre: "Monica",
    apellido: "Galindo",
    fechaNac: "09-08-1994",
    domicilio: {
      direccion: "Av. de las Camelias 1976",
      ciudad: "Rosario",
      provincia: "Santa Fe",
    },
    envios: [
      {
        id_envio: "13",
        fecha: "24-04-2023",
        items: [
          {
            id_producto: "128",
            nombre_producto: "Johnny Walker - Black Label",
            precio: 5000,
            cantidad: 5,
          },
          {
            id_producto: "129",
            nombre_producto: "Coca Cola",
            precio: 600,
            cantidad: 4,
          },
        ],
        tipo_envio: "sucursal",
        estado_envio: "entregado",
        rango_horario: "14:43:55",
        forma_pago: "efectivo",
        total: 27400,
      },
      {
        id_envio: "55",
        fecha: "24-04-2023",
        items: [
          {
            id_producto: "128",
            nombre_producto: "Johnny Walker - Black Label",
            precio: 5000,
            cantidad: 5,
          },
          {
            id_producto: "129",
            nombre_producto: "Coca Cola",
            precio: 600,
            cantidad: 4,
          },
        ],
        tipo_envio: "domicilio",
        estado_envio: "En camino",
        rango_horario: "14:43:55",
        forma_pago: "efectivo",
        total: 27400,
      },
    ],
    contraseña: "goku123",
    mail: "monga@gmail.com",
    telefono: 10303456,
    isActive: true,
  },
  {
    id: "4",
    nombre: "Santino",
    apellido: "Sulivan",
    fechaNac: "10-03-1950",
    domicilio: {
      direccion: "Av. de las Camelias 1976",
      ciudad: "Rosario",
      provincia: "Santa Fe",
    },
    envios: [
      {
        id_envio: "14",
        fecha: "24-04-2023",
        items: [
          {
            id_producto: "130",
            nombre_producto: "Johnny Walker - Black Label",
            precio: 5000,
            cantidad: 5,
          },
          {
            id_producto: "131",
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
    mail: "gundogan@gmail.com",
    telefono: 10303456,
    isActive: true,
  },
  {
    id: "5",
    nombre: "Juan Carlos",
    apellido: "Navone",
    fechaNac: "01-01-1970",
    domicilio: {
      direccion: "Av. de las Camelias 1976",
      ciudad: "Rosario",
      provincia: "Santa Fe",
    },
    envios: [
      {
        id_envio: "15",
        fecha: "24-04-2023",
        items: [
          {
            id_producto: "132",
            nombre_producto: "Johnny Walker - Black Label",
            precio: 5000,
            cantidad: 5,
          },
          {
            id_producto: "133",
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
      {
        id_envio: "1345",
        fecha: "24-04-2023",
        items: [
          {
            id_producto: "128",
            nombre_producto: "Johnny Walker - Black Label",
            precio: 5000,
            cantidad: 5,
          },
          {
            id_producto: "129",
            nombre_producto: "Coca Cola",
            precio: 600,
            cantidad: 4,
          },
        ],
        tipo_envio: "domicilio",
        estado_envio: "despachado",
        rango_horario: "14:43:55",
        forma_pago: "efectivo",
        total: 27400,
      },
    ],
    contraseña: "goku123",
    mail: "holajuancarlos@gmail.com",
    telefono: 10303456,
    isActive: true,
  },
];

export default (_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(usuarios));
};
