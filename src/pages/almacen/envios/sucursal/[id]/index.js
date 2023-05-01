import ReturnArrow from "@/Components/ReturnArrow";
import { useRouter } from "next/router";
export default function Detalles() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <ReturnArrow href="/almacen/envios/sucursal" />
      <h1>Aca vamos a ver los detalles del envío n°: {id}</h1>
    </>
  );
}
