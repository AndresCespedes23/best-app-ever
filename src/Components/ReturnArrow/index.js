import Link from "next/link";
import arrow from "../../../public/images/store/volver.png";
import Image from "next/image";
import styles from "../../styles/return-arrow.module.css";
export default function ReturnArrow() {
  return (
    <div className={styles.arrow}>
      <Image height={25} width={25} src={arrow} alt="volver" />
      <Link className={styles.arrowText} href="/almacen/envios">
        <p>Volver</p>
      </Link>
    </div>
  );
}
