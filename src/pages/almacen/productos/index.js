/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../../styles/productos.module.css";
import carne from "../../../../public/images/store/carne.jpg";
import alcohol from "../../../../public/images/store/bl.jpg";
import coca from "../../../../public/images/store/coca.jpg";
import verdu from "../../../../public/images/store/verdu.jpg";
import ProductsPhotoContainer from "@/Components/ProductsPhotoContainer";
import Link from "next/link";
import ReturnArrow from "@/Components/ReturnArrow";

export default function Productos() {
  return (
    <>
      <Head>
        <title>Best App Ever - almacen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReturnArrow href="/almacen" />
      <h1 className={styles.productos}>Productos</h1>
      <div className={styles.categoriasProductos}>
        <Link href="productos/carnes">
          <ProductsPhotoContainer src={carne} alt="carniceria" text="Carnes" />
        </Link>

        <Link href="productos/bebidas-sin-alcohol">
          <ProductsPhotoContainer
            src={coca}
            alt="bebidas-sin-alcohol"
            text="Bebidas sin alcohol"
          />
        </Link>

        <Link href="productos/bebidas-alcoholicas">
          <ProductsPhotoContainer
            src={alcohol}
            alt="bebidas-alcoholicas"
            text="Bebidas alcoholicas"
          />
        </Link>

        <Link href="productos/frutas-y-verduras">
          <ProductsPhotoContainer
            src={verdu}
            alt="verduleria"
            text="Frutas y verduras"
          />
        </Link>
      </div>
    </>
  );
}
