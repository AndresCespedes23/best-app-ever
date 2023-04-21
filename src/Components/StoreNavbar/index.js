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
          <Link href="/store/grocery">
            <Image height={40} width={40} src={grocery} alt="grocery" />
          </Link>
        </ul>
        <ul className={styles.navbarIcons}>
          <Link href="/store">
            <Image height={50} width={50} src={home} alt="home" />
          </Link>
        </ul>
        <ul className={styles.navbarIcons}>
          <Link href="/store/delivery">
            <Image height={40} width={40} src={delivery} alt="delivery" />
          </Link>
        </ul>
      </nav>
    </div>
  );
}
