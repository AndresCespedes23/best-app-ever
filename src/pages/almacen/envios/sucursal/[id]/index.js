import ReturnArrow from "@/Components/ReturnArrow";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/detalles.module.css";
import { ENVIOS_STATUS } from "@/constants/envios";

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
                    <p>
                      Nombre: {user.nombre} {user.apellido}
                    </p>
                    <p>Dirección de envío: {user.domicilio.direccion}</p>
                    <p>Horario: {envio.rango_horario}</p>
                    <p>Total: ${envio.total}</p>
                    <p>Forma de pago: {envio.forma_pago}</p>

                    <div className={styles.btnsContainer}>
                      <button
                        className={
                          envio.estado_envio === ENVIOS_STATUS.PENDIENTE
                            ? styles.envioPendiente
                            : styles.deliveryBtn
                        }
                      >
                        Pendiente
                      </button>
                      <button
                        className={
                          ENVIOS_STATUS.DESPACHADO === envio.estado_envio
                            ? styles.envioDespachado
                            : styles.deliveryBtn
                        }
                      >
                        Despachado
                      </button>
                      <button
                        className={
                          ENVIOS_STATUS.RETIRAR === envio.estado_envio
                            ? styles.retirarEnvio
                            : styles.deliveryBtn
                        }
                      >
                        Retirar
                      </button>
                      <button
                        className={
                          ENVIOS_STATUS.ENTREGADO === envio.estado_envio
                            ? styles.envioEntregado
                            : styles.deliveryBtn
                        }
                      >
                        Entregado
                      </button>
                    </div>
                  </div>
                );
            })}
          </div>
        );
      })}
    </>
  );
}
