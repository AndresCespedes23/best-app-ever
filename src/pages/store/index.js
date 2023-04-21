import Head from "next/head";
import Image from "next/image";
import delivery from "../../../public/images/store/entrega.png";
import grocery from "../../../public/images/store/compras.png";
import StoreNavbar from "@/Components/StoreNavbar";
import styles from "../../styles/store.module.css";
import Link from "next/link";

export default function Store() {
  return (
    <>
      <Head>
        <title>Best App Ever - Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Store</h1>
        <div className={styles.storeBtns}>
          <Link className={styles.delivery} href="store/delivery">
            <Image height={64} width={64} src={delivery} alt="delivery" />
            <h2>Envíos</h2>
          </Link>
          <Link className={styles.grocery} href="/store/grocery">
            <Image height={64} width={64} src={grocery} alt="grocery" />
            <h2>Productos</h2>
          </Link>
        </div>
        <StoreNavbar />
      </div>
    </>
  );
}