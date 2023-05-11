/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import wip from "public/wfh.gif";
import styles from "@/styles/wip.module.css";

export default function WorkInProgress({ href }) {
  return (
    <section className={styles.wip}>
      <h1 className={styles.title}>
        Lo sentimos, está página sigue en desarrollo ...
      </h1>
      <div>
        <Image className={styles.gif} src={wip} alt="work-in-progress" />
      </div>
      <Link className={styles.btnLink} href={href}>
        <button className={styles.wipBtn}>Por favor, vuelva más tarde</button>
      </Link>
    </section>
  );
}
