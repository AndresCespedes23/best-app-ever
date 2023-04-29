import Link from "next/link";
import arrow from "../../../public/images/store/retornar.png";
import Image from "next/image";
import styles from "../../styles/return-arrow.module.css";
export default function ReturnArrow({ href }) {
  return (
    <div className={styles.arrow}>
      <Image height={25} width={25} src={arrow} alt="retornar" />
      <Link className={styles.arrowText} href={href}>
        <p>Volver</p>
      </Link>
    </div>
  );
}
