import Head from "next/head";
import styles from "../../../styles/productos.module.css";

export default function Grocery() {
  return (
    <>
      <Head>
        <title>Best App Ever - almacen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.productos}>productos</h1>
    </>
  );
}