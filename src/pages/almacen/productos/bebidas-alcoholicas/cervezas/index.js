import ReturnArrow from "@/Components/ReturnArrow";
import styles from "@/styles/cervezas.module.css";

export default function Cervezas() {
  return (
    <>
      <ReturnArrow href="/almacen/productos/bebidas-alcoholicas" />
      <h1 className={styles.cervezasTitulo}>Cervezas</h1>
    </>
  );
}
