import Image from "next/image";
import styles from "@/styles/container-fotos-productos.module.css";

export default function ProductsPhotoContainer({ src, alt, text }) {
  return (
    <figure className={styles.fotosContainer}>
      <Image
        className={styles.fotosProducto}
        height={264}
        width={512}
        src={src}
        alt={alt}
      />
      <figcaption className={styles.fotosPie}>{text}</figcaption>
    </figure>
  );
}
