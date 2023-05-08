import Head from "next/head";
import Image from "next/image";
import delivery from "../../../public/images/store/entrega.png";
import grocery from "../../../public/images/store/compras.png";
import styles from "../../styles/almacen.module.css";
import Link from "next/link";

export default function Store() {
  return (
    <>
      <Head>
        <title>Best App Ever - Almacen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Almacen</h1>
      <div className={styles.storeBtns}>
        <Link className={styles.delivery} href="/almacen/envios">
          <Image height={64} width={64} src={delivery} alt="envios" />
          <h2>Envíos</h2>
        </Link>
        <Link className={styles.grocery} href="/almacen/productos">
          <Image height={64} width={64} src={grocery} alt="productos" />
          <h2>Productos</h2>
        </Link>
      </div>
    </>
  );
}
