import Image from "next/image";
import styles from "@/styles/container-subcategorias.module.css";

export default function SubcategoriesContainer({ src, alt, text }) {
  return (
    <>
      <figure className={styles.containerSubcategorias}>
        <div className={styles.imgCursorEffect}>
          <Image
            className={styles.subcategoriaFoto}
            height={264}
            width={264}
            src={src}
            alt={alt}
          />
          <figcaption className={styles.pieSubcategorias}>{text}</figcaption>
        </div>
      </figure>
    </>
  );
}
