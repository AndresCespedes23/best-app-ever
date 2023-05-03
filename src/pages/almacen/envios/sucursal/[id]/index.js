import ReturnArrow from "@/Components/ReturnArrow";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/detalles.module.css";

export default function Detalles() {
  const router = useRouter();
  const { id } = router.query;

  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("/api/entidades/usuarios")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <ReturnArrow href="/almacen/envios/sucursal" />
      {users?.map((user, index) => {
        return (
          <div key={index}>
            {user.envios?.map((envio, index) => {
              if (envio.id_envio === id)
                return (
                  <div className={styles.detallesContainer} key={index}>
                    <p>N° de envio: {envio.id_envio}</p>
                    <p>Nombre:</p>
                    <p>Dirección de envío:</p>
                    <p>Horario: {envio.rango_horario}</p>
                    <p>Total: ${envio.total}</p>
                    <p>Forma de pago: {envio.forma_pago}</p>
                  </div>
                );
            })}
          </div>
        );
      })}
    </>
  );
}
