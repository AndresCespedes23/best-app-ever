import grocery from "../../../public/images/store/compras.png";
import home from "../../../public/images/store/casa.png";
import delivery from "../../../public/images/store/entrega.png";
import Image from "next/image";
import styles from "../../styles/store-navbar.module.css";
export default function StoreNavbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarIcons}>
          <Image height={40} width={40} src={grocery} alt="grocery" />
        </ul>
        <ul className={styles.navbarIcons}>
          <Image height={50} width={50} src={home} alt="home" />
        </ul>
        <ul className={styles.navbarIcons}>
          <Image height={40} width={40} src={delivery} alt="delivery" />
        </ul>
      </nav>
    </div>
  );
}
