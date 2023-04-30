import Head from "next/head";
import Image from "next/image";
import ReturnArrow from "@/Components/ReturnArrow";
import domicilio from "../../../../../public/images/store/delivery/domicilio.png";
import lupa from "../../../../../public/images/store/lupa.png";
import styles from "../../../../styles/residence.module.css";
import { useEffect, useState } from "react";
import { ENVIOS } from "@/constants/envios";
import { ENVIOS_STATUS } from "@/constants/envios";
import Link from "next/link";

export default function Residence() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("/api/entidades/usuarios")
      .then((res) => res.json())
      .then(setUsers);
  }, []);
  console.log(users);
  return (
    <>
      <Head>
        <title>Best App Ever - almacen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ReturnArrow href="/almacen/envios" />

      <figure className={styles.residence}>
        <Image height={64} width={64} src={domicilio} alt="domicilio" />
        <figcaption>Domicilio</figcaption>
      </figure>

      <div className={styles.deliveryInfo}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>#</th>
              <th className={styles.tableHeader}>Fecha</th>
              <th className={styles.tableHeader}>Estado</th>
              <th className={styles.tableHeader}>Detalles</th>
            </tr>
          </thead>

          {users?.map((user, index) => {
            return (
              <tbody key={index}>
                {user.envios?.map((envio, index) => {
                  if (envio.tipo_envio === ENVIOS.DOMICILIO)
                    return (
                      <tr className={styles.tableRow} key={index}>
                        <td className={styles.tableData}>{envio.id_envio}</td>
                        <td className={styles.tableData}>{envio.fecha}</td>
                        {(() => {
                          switch (envio.estado_envio) {
                            case ENVIOS_STATUS.DESPACHADO:
                              return (
                                <td className={styles.tableDataDespachado}>
                                  {envio.estado_envio}
                                </td>
                              );
                            case ENVIOS_STATUS.RETIRAR:
                              return (
                                <td className={styles.tableDataRetirar}>
                                  {envio.estado_envio}
                                </td>
                              );
                            case ENVIOS_STATUS.EN_CAMINO:
                              return (
                                <td className={styles.tableDataEnCamino}>
                                  {envio.estado_envio}
                                </td>
                              );
                            case ENVIOS_STATUS.ENTREGADO:
                              return (
                                <td className={styles.tableDataEntregado}>
                                  {envio.estado_envio}
                                </td>
                              );
                            default:
                              ENVIOS_STATUS.PENDIENTE;
                              return (
                                <td className={styles.tableDataPendiente}>
                                  {envio.estado_envio}
                                </td>
                              );
                          }
                        })()}
                        <td className={styles.tableData}>
                          <Link href={`sucursal/${envio.id_envio}`}>
                            <Image
                              height={32}
                              width={32}
                              src={lupa}
                              alt="detalles"
                            />
                          </Link>
                        </td>
                      </tr>
                    );
                })}
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
