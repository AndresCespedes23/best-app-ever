import Link from "next/link";
import arrow from "../../../public/images/store/volver.png";
import Image from "next/image";
import styles from "../../styles/return-arrow.module.css";
export default function ReturnArrow() {
  return (
    <Link className={styles.arrow} href="/almacen/envios">
      <Image height={25} width={25} src={arrow} alt="volver" />
      <p className={styles.arrowText}>Volver</p>
    </Link>
  );
}
