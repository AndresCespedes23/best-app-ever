import grocery from "../../../public/images/store/compras.png";
import home from "../../../public/images/store/casa.png";
import delivery from "../../../public/images/store/entrega.png";
import Image from "next/image";
import styles from "../../styles/store-navbar.module.css";
import Link from "next/link";
export default function StoreNavbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarIcons}>
          <Link href="/almacen/productos">
            <Image height={40} width={40} src={grocery} alt="productos" />
          </Link>
        </ul>
        <ul className={styles.navbarIcons}>
          <Link href="/almacen">
            <Image height={50} width={50} src={home} alt="home" />
          </Link>
        </ul>
        <ul className={styles.navbarIcons}>
          <Link href="/almacen/envios">
            <Image height={40} width={40} src={delivery} alt="envios" />
          </Link>
        </ul>
      </nav>
    </div>
  );
}
