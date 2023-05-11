import styles from "@/styles/bebidas-alcoholicas.module.css";
import vinos from "../../../../../public/images/store/vinos1.jpg";
import cerveza from "../../../../../public/images/store/cervezas.jpg";
import whiskies from "../../../../../public/images/store/whiskies.jpg";
import espumantes from "../../../../../public/images/store/espumantes.jpg";
import vodka from "../../../../../public/images/store/vodkas.jpg";
import aperitivos from "../../../../../public/images/store/aperitivos.jpg";
import SubcategoriesContainer from "@/Components/SubcategoriesContainer";
import Link from "next/link";
import ReturnArrow from "@/Components/ReturnArrow";
export default function BebidasAlcoholicas() {
  return (
    <>
      <ReturnArrow href="/almacen/productos/" />
      <h1 className={styles.bebidasAlcoholicasTitulo}>Bebidas Alcohólicas</h1>
      <div className={styles.subcategoriesGrid}>
        <Link href="bebidas-alcoholicas/vinos">
          <SubcategoriesContainer src={vinos} alt="Vinos" text="Vinos" />
        </Link>
        <Link href="bebidas-alcoholicas/cervezas">
          <SubcategoriesContainer src={cerveza} alt="Cerveza" text="Cerveza" />
        </Link>
        <Link href="bebidas-alcoholicas/whiskies">
          <SubcategoriesContainer
            src={whiskies}
            alt="Whiskies"
            text="Whiskies"
          />
        </Link>
        <Link href="bebidas-alcoholicas/espumantes">
          <SubcategoriesContainer
            src={espumantes}
            alt="Espumantes"
            text="Espumantes"
          />
        </Link>
        <Link href="bebidas-alcoholicas/aperitivos">
          <SubcategoriesContainer
            src={aperitivos}
            alt="Aperitivos"
            text="Aperitivos"
          />
        </Link>
        <Link href="bebidas-alcoholicas/bebidas-blancas">
          <SubcategoriesContainer
            src={vodka}
            alt="Bebidas Blancas"
            text="Bebidas Blancas"
          />
        </Link>
      </div>
    </>
  );
}
